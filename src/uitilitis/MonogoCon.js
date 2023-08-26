import mongoose from "mongoose";

const mongodbConnection = async() => {
  try {
    mongoose.connect(process.env.MONGODB_URL_KEY)
    console.log('MongoDB connected ');
  } catch (error) {
    console.log(error , "from mongoDB components ");
  }
}

export default mongodbConnection;