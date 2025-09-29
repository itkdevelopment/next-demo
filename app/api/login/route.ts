import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET() {
  const cookie = await cookies();
  cookie.set("custom-cookie", Math.random().toString());
  return redirect("/");
}
