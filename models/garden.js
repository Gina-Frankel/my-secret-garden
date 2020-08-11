import mongoose from "mongoose";
const { String, Buffer } = mongoose.Schema.Types;

const GardenSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  image: { data: Buffer },
});

// if model exist use it OR generate model
export default mongoose.models.garden || mongoose.model("garden", GardenSchema);
