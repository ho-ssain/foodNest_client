import { Link } from "react-router-dom";
import MobileNav from "./mobileNav";
import MainNav from "./mainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-slate-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold  tracking-tight text-slate-800"
        >
          FoodNest
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
