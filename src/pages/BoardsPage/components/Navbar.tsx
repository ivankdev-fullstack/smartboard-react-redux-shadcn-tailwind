import UserPopover from "@/components/UserPopover";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/darkLogo.png";

const Navbar = () => {
  const navigation = useNavigate();

  return (
    <div className="flex justify-between items-center h-[70px] bg-white text-primary-black border-b-4 border-primary-blue px-8">
      <img
        className="block max-h-[30px] px-4 cursor-pointer"
        src={Logo}
        alt="logo"
        onClick={() => navigation("/boards")}
      />
      <UserPopover arrowDropdownColor="hsl(var(--primary-black))" />
    </div>
  );
};

export default Navbar;
