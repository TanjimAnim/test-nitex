import { SessionOptions } from "iron-session";

export const sessionOption: SessionOptions = {
  cookieName: process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME ?? "nitex",
  password: process.env.NEXT_PUBLIC_SESSION_COOKIE_PASSWORD ?? "tesst",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
