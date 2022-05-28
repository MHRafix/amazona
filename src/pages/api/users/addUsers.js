import nc from "next-connect";
import User from "../../../../models/Users";
import db from "../../../utilities/database";

// users adding function here
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.insertMany(req.body);
  await db.disconnect();
  res.send({ message: "Users added successfully" });
});

// function exported here
export default handler;
