import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardSkillsProps{
    index: number
    icon: IconDefinition | string
    title: string
}

const CardSkill = ({index, icon, title}: CardSkillsProps) => {
  return (
    <div
      key={index}
      className="relative h-[13rem] w-[16rem] flex flex-col items-center justify-center p-4 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-lg "
    >
      <div className="absolute inset-6 bg-primary-transparent h-44 filter blur-lg z-0"></div>
      <div className="relative z-10 flex flex-col gap-4 justify-center items-center pt-5">
        {typeof icon === "string" ? (
          <img src={icon} alt={title} className="h-16 cursor-pointer"/>
        ) : (
          <FontAwesomeIcon icon={icon} className="text-white text-7xl cursor-pointer" />
        )}
        <h3 className="text-white text-lg font-bold text-center block transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:tracking-wide">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CardSkill;
