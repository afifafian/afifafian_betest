import mongoose from "mongoose";

const connection = async () => {
  mongoose
    .set('strictQuery', false)
    .connect(process.env.DB_URL, {})
    .then(() => {
      console.log("Connected Successfully to Database!");
    })
    .catch((err) => {
      console.log(`Error while connecting to Database: ${err}`);
    });
};

export default connection;
