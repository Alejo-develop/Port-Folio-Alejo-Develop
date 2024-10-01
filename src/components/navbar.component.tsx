import { ReactNode } from "react";
import ButtonNavbar from "./buttonNavbar.component";
import { House } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { Zap } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';
import SocialMediaComponent from "./socialMedia.component";

interface NavbarProps {
  children: ReactNode;
}

const NavbarComponent = ({ children }: NavbarProps) => {
  return (
    <div className="grid grid-cols-[1fr_100px]">
      {children}
      <div className="flex flex-col justify-center">
        <div className="flex absolute top-6 right-10 gap-5">
        <SocialMediaComponent />
        </div>
        <nav className="flex flex-col items-center bg-white-transparent gap-8 p-8 pt-2 pb-2  rounded-full w-10">
          <ButtonNavbar path="/" icon={<House size={'1.8rem'} />} />
          <ButtonNavbar path="/aboutme" icon={<BookOpenText size={'1.8rem'} />}/>
          <ButtonNavbar path="/skills" icon={<Zap size={'1.8rem'} />}/>
          <ButtonNavbar path="/projects"  icon={<BriefcaseBusiness size={'1.8rem'} />}/>
        </nav>
      </div>
    </div>
  );
};

export default NavbarComponent;
