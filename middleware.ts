import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { isAuthenticated } from "./lib/tokenVerification"
import { jwtDecode } from "jwt-decode"

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request
  if (!cookies.has("codebility-auth")) {
    return NextResponse.redirect(new URL("/auth/signin", request.url))
  }
  if (nextUrl.pathname === "/auth/signout") {
    const response = NextResponse.redirect(new URL("/auth/signin", request.url))
    response.cookies.delete("codebility-auth")
    return response
  }
  if (cookies.has("codebility-auth")) {
    const result = await isAuthenticated(request)
    if (!result) {
      const response = NextResponse.redirect(new URL("/auth/signin", request.url))
      response.cookies.delete("codebility-auth")
      return response
    }
    const decoded: any = jwtDecode(cookies.get("codebility-auth")?.value as string)
    if (decoded && decoded.userType === "APPLICANT") {
      const response = NextResponse.redirect(new URL("/waiting", request.url))
      return response
    }
  }
}
// TODO:

// export async function middleware(request: NextRequest) {
//   // Removed auth on routes
// }

export const config = {
  matcher: ["/((?!api|auth/signin|auth/signup|codevs|waiting|_next/static|.*\\..*|_next/image|$).*)"],
}
