import UserPopover from "@/components/UserPopover/UserPopover";
import Logo from "../../../assets/darkLogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[70px] bg-white text-primary-black border-b-4 border-primary-blue px-8">
      <img className="block max-h-[30px] px-4" src={Logo} alt="logo" />
      <div className="border-l px-4">
        <UserPopover arrowDropdownColor="hsl(var(--primary-black))" />
      </div>
    </div>
  );
};

export default Navbar;
