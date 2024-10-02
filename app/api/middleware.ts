/*************  ✨ Codeium Command 🌟  *************/
import { withAuth } from "next-auth/middleware";

// Middleware to check for authenticated sessions
export default withAuth({
  pages: {
    signIn: "/signin",  // Redirect to the combined sign-in/sign-up page
  },
  callbacks: {
    authorized: ({ token, req }) => !!token, // Only allow authenticated users
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Protect specific routes
};
