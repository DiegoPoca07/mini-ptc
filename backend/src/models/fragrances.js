import { Schema, model } from "mongoose";

const fragranceSchema = new Schema(
  {
    fragancia: {
      type: String,
      required: true,
      trim: true,  // Remove leading/trailing whitespace
    },

    info_de_la_fragancia: {
      type: String,
      required: true,
      trim: true,  // Remove leading/trailing whitespace
    },

    presentacion: {
      type: String,
      required: true,
      trim: true,  // Remove leading/trailing whitespace
    },

    stock: {
      type: Number,
      required: true,
      min: 0,  // Stock cannot be negative
    },

    precio: {
      type: Number,
      required: true,
      min: 0,  // Price cannot be negative
    },
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

// Error responses for validation
fragranceSchema.post("validate", function (doc, next) {
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

export default model("Fragrance", fragranceSchema);