import { Schema, model } from "mongoose";

const cartSchema = new Schema(
  {
    id_clientes: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Client",  // Assuming you have a "Client" model
    },

    productos: {
      type: [{
        producto: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product",  // Assuming you have a "Product" model
        },
        cantidad: {
          type: Number,
          required: true,
          min: 1,  // Minimum quantity of 1
        },
      }],
      required: true,
    },

    total: {
      type: Number,
      required: true,
      min: 0,  // Total cannot be negative
    },

    estado: {
      type: String,
      required: true,
      enum: ["pendiente", "procesando", "enviado", "entregado"],  // Only allow specific values
    },
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

// Error responses for validation
cartSchema.post("validate", function (doc, next) {
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

export default model("Cart", cartSchema);