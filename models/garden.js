import mongoose from "mongoose";
const { String } = mongoose.Schema.Types;

const GardenSchema = new mongoose.Schema({
  name: { type: String },
});

// if model exist use it OR generate model
export default mongoose.models.gardens ||
  mongoose.model("garden", GardenSchema);
