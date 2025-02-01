import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { loginFormSchema } from "@/app/(auth)/login/types";

export const { auth, handlers } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedValues = loginFormSchema.safeParse(credentials);

        if (!validatedValues.success) {
          return null;
        }

        const user = {
          id: "user_admin",
          email: "krisi.199898@gmail.com",
          password: "krisi.199898@gmail.com",
          role: "ADMIN",
        }

        if (credentials.email === user.email && credentials.password === user.password) {
          return { id: user.id, email: user.email, role: user.role };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/dashboard",
    error: "/login",
  },
  callbacks: {
    async signIn({ user }) {
      if (!user) {
        console.log("Sign-in failed: Invalid credentials or user not found");
      }
      return !!user;
    },
    async session({ session }) {
      return session;
    },
    redirect() {
      return "/dashboard";
    }
  },
});
