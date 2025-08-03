// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
publicRoutes: ["/", "/set-tier", "/events", "/sign-in", "/sign-up"],
});

export const config = {
matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

