import { Schema, model } from "mongoose";

const clothesSchema = new Schema(
  {
    ropa: {
      type: String,
      required: true,
      trim: true,  // Remove leading/trailing whitespace
    },

    talla_disponible: {
      type: String,
      required: true,
      trim: true,  // Remove leading/trailing whitespace
    },

    precio: {
      type: Number,
      required: true,
      min: 0,  // Price cannot be negative
    },

    stock: {
      type: Number,
      required: true,
      min: 0,  // Stock cannot be negative
    },

   // id_categoria: {
   //   type: Schema.Types.ObjectId,
   // ref: "Category",
   //   required: true,
    // },
    

    foto_del_producto: {
      type: String,
      required: true,
      unique: true,
      match: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i,  // Validates URL
    },
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

// Error responses for validation
clothesSchema.post("validate", function (doc, next) {
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

export default model("Ropa", clothesSchema);