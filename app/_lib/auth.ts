import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getAdmin } from "./data-service";

const authConfig = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        const admin = await getAdmin(credentials.email);
        if (admin) {
          return {
            ...admin,
            id: admin.id.toString(),
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }: any) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/hawkvisilogin",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
