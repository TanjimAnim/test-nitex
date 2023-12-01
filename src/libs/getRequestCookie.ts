import { SessionData } from "@/types";
import { unsealData } from "iron-session";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";

/**
 * Can be called in page/layout server component.
 * @param cookies ReadonlyRequestCookies
 * @returns string | undefined
 */

export async function getRequestCookie(
  cookies: ReadonlyRequestCookies | RequestCookies
): Promise<SessionData | undefined> {
  const cookieName = process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME as string;
  const found = cookies.get(cookieName);
  if (!found) return undefined;

  const token = await unsealData(found.value, {
    password: process.env.NEXT_PUBLIC_SESSION_COOKIE_PASSWORD as string,
  });

  return token as unknown as SessionData;
}
