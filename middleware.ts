import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set("x-frame-options", "DENY");
  response.headers.set("x-content-type-options", "nosniff");

  return response;
}
