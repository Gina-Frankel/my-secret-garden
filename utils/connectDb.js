import mongoose from "mongoose";
const connection = {};

async function connectDb() {
  // Existing
  if (connection.isConnected) {
    console.log("Use existing DB connection");
    return;
  }

  // New connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("DB is connected ");
  connection.isConnection = db.connections[0].readyState;
}

export default connectDb;
