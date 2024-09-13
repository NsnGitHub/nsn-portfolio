import "../styles/project.css";
import ProjectActions from "./ProjectActions";

type ImageDetails = {
  src: string;
  alt: string;
};

type ProjectProps = {
  title: string;
  techStackList: string[];
  description: string;
  image: ImageDetails | null;
};

export default function Project({ title, techStackList, description, image }: ProjectProps) {
  return (
    <>
      <div className="project">
        <div className={image == null ? "project__info--no-img" : "project__info"}>
          <h1>{title}</h1>
          <ul className="project__tech-list">
            {techStackList.map((techStack) => (
              <li>{techStack}</li>
            ))}
          </ul>
          <div>{description}</div>
          <ProjectActions />
        </div>
        {image != null ? (
          <div className="project__img">
            <img src={image?.src} alt={image?.alt} />
          </div>
        ) : null}
      </div>
    </>
  );
}
