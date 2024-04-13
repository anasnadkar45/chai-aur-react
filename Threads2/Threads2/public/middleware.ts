import { authMiddleware } from "@clerk/nextjs";
 
// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  // Allow signed out users to access the specified routes:
   publicRoutes: ['/', '/api/webhook/clerk','/onboarding'],
   ignoredRoutes: ['/api/webhook/clerk']
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)","/", "/(api|trpc)(.*)"],
};