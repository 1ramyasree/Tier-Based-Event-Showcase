// middleware.ts
// Temporary: Disable Clerk middleware for production setup

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  return NextResponse.next();
}

