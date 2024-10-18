import ProjectCard from "../components/cardProjects.component";
import { projects } from "../data/data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen ml-12">
      <div className="h-full pt-[5.5rem] flex flex-col gap-12">
        <h3 className="text-5xl ml-4 text-primary font-bold transition-transform duration-300 hover:scale-105">
          My Projects
        </h3>

        <section className="ml-4 min-h-[37.5rem] flex flex-wrap">
            {projects.map((data) => (
              <ProjectCard title={data.title} description={data.description} img={data.img} deploy={data.deploy} frontRepository={data.frontRepository} backRepository={data.backRepository} />
            ))}
        </section>
      </div>
    </div>
  );
}
