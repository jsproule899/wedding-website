import { NextResponse } from "next/server";

export function proxy(req: Request) {
  const url = new URL(req.url);

  // Protect /admin/*
  if (url.pathname.startsWith("/admin")) {
    const cookie = req.headers.get("cookie");
    const adminAuth = cookie
      ?.split("; ")
      .find((c) => c.startsWith("admin_auth="))
      ?.split("=")[1];

    if (adminAuth !== process.env.ADMIN_PASSWORD) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin"],
};