import {auth } from "@/auth";
import { login, logout } from "@/actions/auth";

export default async function SignIn() {

  const session = await auth();

  if (session) {
    return (
      <>
    <p>Signed in as {session.user.email}</p>
    <button onClick={logout}>Sign out</button>
      </>
  );
  }

  return (
    <form
      action={login}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
