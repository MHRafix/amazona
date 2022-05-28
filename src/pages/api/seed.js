import nc from "next-connect";
import User from "../../../models/Users";
import { user_data } from "../../components/common/fake_data/products_data";
import db from "../../utilities/database";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(user_data);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
});

export default handler;
