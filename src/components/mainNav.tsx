import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserNameMenu from "./userNameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      {
        //............................
        isAuthenticated ? (
          <UserNameMenu />
        ) : (
          <Button
            className="font-bold hover:scale-105 bg-slate-800"
            onClick={async () => await loginWithRedirect()}
          >
            Sign-in
          </Button>
        )
      }
    </span>
  );
};

export default MainNav;
