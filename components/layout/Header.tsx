import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <div>
          <Link href="/">
            <a className="text-2xl font-bold">MyApp</a>
          </Link>
        </div>
        <div className="flex space-x-4">
          {session ? (
            <>
              <span>Welcome, {session.user?.name}</span>
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <>
              <button onClick={() => signIn("google")}>Sign in with Google</button>
              <button onClick={() => signIn("github")}>Sign in with GitHub</button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
