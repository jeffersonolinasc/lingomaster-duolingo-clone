import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
    publicRoutes: ["/"],
    // ignoredRoutes: [],
})

export const config = {
    // Protects all routes, including api/trpc
    // see https://clerk.com/docs/references/nextjs/auth-middleware
    // for more information about the configuring your middleware
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
