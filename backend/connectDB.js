import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://sengedorj:MjQvdwlEiJWcdpV2@leap-sengee.5ohxf.mongodb.net/";

const connectDB = async () => {
  const client = new MongoClient(connectionString);

  let connection;

  try {
    connection = await client.connect();
  } catch (e) {
    console.log("failed");
  }
  const db = connection.db("sample");
  return db;
};
export default connectDB;
