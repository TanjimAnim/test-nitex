// pages/api/logout.ts

import { NextApiRequest, NextApiResponse } from "next";
import { sessionOption } from "../../libs/session";
import { getIronSession } from "iron-session";
import { SessionData } from "@/types";

export default async function Logout(req: any, res: any) {
  try {
    const session = await getIronSession<SessionData>(req, res, sessionOption);

    session.username = req.body;
    session.destroy();
    res.status(200).send({ ok: true });
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
