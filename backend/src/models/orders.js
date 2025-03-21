import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    id_carrito_compras: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Cart",  // Assuming you have a "Cart" model
    },

    metodo_de_pago: {
      type: String,
      required: true,
      enum: ["tarjeta de crédito", "transferencia bancaria", "paypal", "efectivo"],  // Only allow specific values
    },

    direccion: {
      type: String,
      required: true,
      trim: true,  // Remove leading/trailing whitespace
    },

    estado_de_entrega: {
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
orderSchema.post("validate", function (doc, next) {
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

export default model("Order", orderSchema);