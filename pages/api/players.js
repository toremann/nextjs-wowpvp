import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  console.log(res);

  const players = await db.collection("players").find({}).toArray();

  res.json(players);
};
