import CardHumanSkills from "../components/cardHumanSkiils.component";
import HistoryCardComponent from "../components/historyCard.component";
import { history, softSkills } from "../data/data";

export default function AboutMePage() {
  return (
    <>
      <style>{`
        .no-scrollbar {
          overflow-y: auto; 
          scrollbar-width: none; 
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none; 
        }
      `}</style>

      <div className="min-h-screen ml-10 overflow-y-auto no-scrollbar">
        <div className="h-[40rem] w-[85rem] pt-20 ml-5  rounded-lg grid grid-cols-[1fr_25rem]">
          <div className="h-[85rem] grid grid-rows-2">
            <div className="h-full">
              <h3 className="text-5xl mt-3  text-primary font-bold transition-transform duration-300 hover:scale-105">
                About me
              </h3>

              <p className="text-white mt-4 text-xl w-[40rem]">
                Hi, I'm Alejandro Vergara Zapata, a passionate <span className="text-primary font-bold transition-transform duration-300 hover:scale-105">programmer</span> with
                experience in developing modern and efficient front-end and
                back-end web applications. I specialize in creating solutions
                that not only meet functional requirements, but also provide an
                exceptional <span className="text-primary font-bold transition-transform duration-300 hover:scale-105">user experience</span>.
              </p>
              <div className="flex gap-8 mt-14">
                {
                  history.map((data) => (
                    <HistoryCardComponent title={data.title} description={data.description} year={data.year} img={data.img}/>
                  ))
                }
              </div>
            </div>
            <div className="flex flex-col justify-center ml-4">
              <h3 className="text-5xl text-center text-primary font-bold transition-transform duration-300 hover:scale-105">
                Why work with me?
              </h3>
              <div className="h-full flex flex-wrap justify-center items-center gap-20">
                {
                  softSkills.map((data) => (
                    <CardHumanSkills title={data.title} description={data.description} Icon={data.icon}/>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="h-full"><h1>foto de perfil</h1></div>
        </div>
      </div>
    </>
  );
}
