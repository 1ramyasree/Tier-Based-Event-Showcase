import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});
export const config = {
matcher: ["/((?!_next|.\..).*)"], // protect everything except static files and public assets
};
