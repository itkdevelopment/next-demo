import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const runtime = "edge";

export async function GET() {
  const cookie = await cookies();
  cookie.set("custom-cookie", Math.random().toString());
  return redirect("/cookie");
}
