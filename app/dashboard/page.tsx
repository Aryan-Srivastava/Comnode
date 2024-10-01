import { useSession, signIn, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>Welcome, {session?.user?.name}</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please sign in</h1>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};

export default Dashboard;
