import { SessionOptions } from "iron-session";

export type SessionData = {
  userId?: number;
  username?: string;
  xp?: number;
  isLoggedIn: boolean;
};

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  // should use env of course :)
  password:
    "complex_password_at_least_32_characters_long_and_very_secure_123456789",
  cookieName: "auth_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
