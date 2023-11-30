import login from "@/controllers/login";
import { sessionOption } from "@/libs/session";
import { getIronSession } from "iron-session";

export async function Login(req: any, res: any) {
  try {
    const session = await getIronSession(req, res, sessionOption);
    const data = await login();

    await session.save();
  } catch (error) {}
}
