import { auth } from "@/lib/auth";

export async function GET() {
  try {
    const session = await auth();

    if (!session || !session.user?.email) {
      return new Response(JSON.stringify(null), {
        status: 200,
      });
    }

    const user = {
      id: "user_admin",
      email: "krisi.199898@gmail.com",
      password: "krisi.199898@gmail.com",
      role: "ADMIN",
    };

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ email: user.email, role: user.role }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
