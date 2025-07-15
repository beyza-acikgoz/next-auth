// src/lib/auth.ts
import Auth0Provider from "next-auth/providers/auth0";
import { jwtVerify } from "jose";

export const authOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!, 
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

export function getJwtSecretKey() {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

  if (!secret) {
    throw new Error("JWT Secret key is not matched");
  }

  return new TextEncoder().encode(secret);
}

export async function verifyJwtToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return payload;
  } catch (error) {
    return null;
  }
}
