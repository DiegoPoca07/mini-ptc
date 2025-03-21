import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    categoria: {
      type: String,
      required: true,
      enum: ["formal", "casual", "deportivo"],  // Only allow specific values
    },
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

// Error responses for validation
categorySchema.post("validate", function (doc, next) {
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

export default model("Category", categorySchema);