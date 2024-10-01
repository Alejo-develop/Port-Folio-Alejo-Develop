import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ButtonNavbarProps{
    path: string;
    icon: ReactNode
}

const ButtonNavbar = ({path, icon}: ButtonNavbarProps) => {
  const goTo = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleClick = () => {
    goTo(`${path}`)
  }

  return(
    <button className={`text-white px-3 py-3 rounded-full cursor-pointer transition-color duration-300 hover:bg-primary-transparent  hover:scale-110 ${pathname === path && 'bg-primary-transparent'}`} onClick={handleClick}>
        {icon}
    </button>
  )
};

export default ButtonNavbar;
