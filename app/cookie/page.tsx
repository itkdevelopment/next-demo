"use client";
import cookies from "js-cookie";

export default function CookiesDemo() {
  return (
    <div className="max-w-4xl mx-auto p-8 flex flex-col items-center">
      <a
        className=" font-bold mb-8 border border-gray-300 p-2 cursor-pointer bg-amber-200 rounded block"
        href="/api/login"
      >
        assign cookie from server
      </a>

      <div>Current cookie: {cookies.get("custom-cookie")}</div>
    </div>
  );
}
