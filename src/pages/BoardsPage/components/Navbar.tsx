import UserPopover from "@/components/UserPopover";
import Logo from "../../../assets/darkLogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[70px] bg-white text-primary-black border-b-4 border-primary-blue px-8">
      <img className="block max-h-[30px] px-4" src={Logo} alt="logo" />
      <UserPopover arrowDropdownColor="hsl(var(--primary-black))" />
    </div>
  );
};

export default Navbar;
