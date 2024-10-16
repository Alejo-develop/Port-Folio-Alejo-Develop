import { frontSkills, backSkills } from "../data/data";
import CardSkill from "../components/cardSkills.component";

export default function MySkillsPage() {
  return (
    <div className="min-h-screen ml-12">
      <div className="h-full pt-[5.5rem] flex flex-col gap-3">
        <h3 className="text-5xl ml-4 text-primary font-bold transition-transform duration-300 hover:scale-105">
          My Skills
        </h3>

        <div className="min-h-[36rem] grid grid-rows-2">
          <div className="grid grid-rows-[0.3fr_1fr]">
            <div className="flex items-center">
              <h5 className="text-secondary font-extrabold ml-4 text-center block transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:tracking-wide">
                Front-End
              </h5>
            </div>

            <div className="flex items-center justify-around">
              {frontSkills.map((data, index) => (
                <CardSkill index={index} icon={data.icon} title={data.title} />
              ))}
            </div>
          </div>
          <div className="grid grid-rows-[0.3fr_1fr]">
            <div className="flex items-center">
              <h5 className="text-secondary font-extrabold ml-4 text-center block transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:tracking-wide">
                Back-End
              </h5>
            </div>

            <div>
              <div className="flex items-center justify-around">
                {backSkills.map((data, index) => (
                  <CardSkill
                    index={index}
                    icon={data.icon}
                    title={data.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
