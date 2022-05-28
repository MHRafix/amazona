import nc from "next-connect";
import User from "../../../../models/Users";
import db from "../../../utilities/database";

// users getting function here
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const users = await User.find({});
  await db.disconnect();
  res.send(users);
});

// function exported here
export default handler;
