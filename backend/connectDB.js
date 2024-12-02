import { MongoClient } from "mongodb";

const connectString =
  "mongodb+srv://sengedorj:MjQvdwlEiJWcdpV2@leap-sengee.5ohxf.mongodb.net/";

const connectDB = async () => {
  const client = new MongoClient(connectString);
  let connection;

  try {
    connection = await client.connect();
  } catch (error) {
    console.log(error);
  }
  const db = connection.db("food-delivery");
  return db;
};

export default connectDB;
