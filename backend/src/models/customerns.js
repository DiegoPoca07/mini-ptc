import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const clientSchema = new Schema(
  {
    correo: {
      type: String,
      required: true,
      unique: true,
      trim: true,  // Remove leading/trailing whitespace
      lowercase: true,  // Convert email to lowercase
      match: /^\S+@\S+\.\S+$/,  // Basic email validation
    },

    contraseña: {
      type: String,
      required: true,
      minlength: 8,  // Minimum password length of 8 characters
      validate: {
        validator: function (password) {
          // Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
        },
        message: "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.",
      },
    },

    nombre_usuario: {
      type: String,
      required: true,
      unique: true,
      trim: true,  // Remove leading/trailing whitespace
    },

    foto_de_perfil: {
      type: String,
      required: true,
      match: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i,  // Validates URL
    },
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

// Hash the password before saving the document
clientSchema.pre("save", async function (next) {
  if (this.isModified("contraseña")) {
    this.contraseña = await bcrypt.hash(this.contraseña, 10);
  }
  next();
});

// Error responses for validation
clientSchema.post("validate", function (doc, next) {
  const errors = doc.errors;
  if (errors) {
    const validationErrors = {};
    Object.keys(errors).forEach((field) => {
      validationErrors[field] = {
        message: errors[field].message,
        value: errors[field].value,
      };
    });
    const error = new Error("Validation failed");
    error.errors = validationErrors;
    error.status = 400;
    next(error);
  } else {
    next();
  }
});

export default model("Client", clientSchema);