import { NextRequest, NextResponse } from "next/server";

// Middleware runs on the edge/Node side and cannot use React hooks.
// Fetch the BetterAuth session from the Express backend (port 3001)
// and forward the cookie header so the backend can validate the session.
export async function middleware(req: NextRequest) {
  console.log("middleware function run");

  try {
    console.log("middleware reading NEXT_PUBLIC_API_URL=", process.env.NEXT_PUBLIC_API_URL);
    const base = process.env.NEXT_PUBLIC_API_URL || "https://humright-1.onrender.com/api";
    const backend = `${base}/session`;
    console.log("middleware base:", base, "backend:", backend);
    const cookie = req.headers.get("cookie") || "";

    const res = await fetch(backend, {
      headers: {
        cookie,
      },
      credentials: "include",
    });

    const { pathname } = req.nextUrl;

    // allow public access to auth pages; only redirect after session fetch fails
    // if trying to access protected routes
    if (!res.ok) {
      const text = await res.text();
      console.error("session fetch failed", res.status, text);
      // only redirect to login if accessing protected routes
      if (pathname.startsWith("/admin") || pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      // allow unauthenticated users to access public auth pages
      return NextResponse.next();
    }

    const session = await res.json();
    console.log("session in middleware", session);

    const isLoggedIn = !!session?.user;

    // redirect authenticated users away from auth pages
    if ((pathname.startsWith("/login") || pathname.startsWith("/signup")) && isLoggedIn) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if(pathname.startsWith("/admin") && session.user.role !=="ADMIN"){
      return NextResponse.redirect(new URL("/", req.url));
    }

    // protect admin/dashboard routes
    if ((pathname.startsWith("/admin") || pathname.startsWith("/dashboard")) && !isLoggedIn) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.error("error while running middleware", err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/signup"],
};