import mongoose from "mongoose";

const departmentsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
      value: {
            type:Array
        },
    status: {
      type: Number,
    },
  },
  { timestamps: true }
);

const departmentsModel = mongoose.model("Departments", departmentsSchema);

export default departmentsModel;