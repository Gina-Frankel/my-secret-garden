// route
// routes are simple functions
// next makes it very easy to make routes - just need a function - you do not need configuration
// do not have to import node it is already available
import garden from "../../models/garden";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  const gardens = await garden.find({ area: req.query._area });
  res.status(200).json(gardens);
};
