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


export default model("Category", categorySchema);