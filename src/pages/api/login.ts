import login from "@/controllers/login";
import { sessionOption } from "@/libs/session";
import { getIronSession } from "iron-session";

export default async function Login(req: any, res: any) {
  try {
    const session = await getIronSession(req, res, sessionOption);
    const data = await login();
    await session.save();
    res.status(200).send({ ok: true, ...data });
  } catch (error: any) {
    if (error.response && error.response.data) {
      // If error has a response and data property, send that data
      res.status(400).send(error.response.data);
    } else {
      // If not, handle the error in a generic way
      console.error("An unexpected error occurred:", error);
      res.status(500).send("Internal Server Error");
    }
  }
}
