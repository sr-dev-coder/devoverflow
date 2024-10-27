import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
        className="px-10 pt-[100px]"
      >
        <Button type="submit">Logout</Button>
      </form>
      <h1 className="h1-bold">Welcome to the world of Next.js</h1>
    </>
  );
};

export default Home;
