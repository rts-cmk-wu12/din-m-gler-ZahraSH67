import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("dm_token"); // get token from cookies
 

  console.log("token:", token)

  //Check for protected paths
  if (!token) {
    // Redirect to login page with return parameter
    return NextResponse.redirect(new URL ('/login', req.url));
  }
}

// Define the routes on which the middleware is applied
export const config = {
  matcher: ["/savedBuildings/:path*"],
};
