import GitHubBoxComponent from "./gitHubBox.componet";

interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  deploy: string;
  frontRepository: string;
  backRepository: string;
}

const ProjectCard = ({
  title,
  description,
  img,
  deploy,
  frontRepository,
  backRepository,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col max-w-[30rem] max-h-[30rem] gap-7">
      <h1 className="text-primary text-center text-2xl pt-2 font-bold">{title}</h1>

      <div className="border-2 border-primary">
        <a href={deploy}>
          <img src={img} alt="" className="w-full" />
        </a>
      </div>

      <div>
        <p className="text-base text-center text-white mb-5">{description}</p>

        <div className="flex justify-around">
          <GitHubBoxComponent typeRepository='Front-End' repository={frontRepository} />
          <GitHubBoxComponent typeRepository='Back-End' repository={backRepository} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
