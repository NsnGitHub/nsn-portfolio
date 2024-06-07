import "../styles/project.css";
import ProjectActions from "./ProjectActions";

export default function Project() {
  return (
    <>
      <div className="project">
        <div className="project__info">
          <h1>Title</h1>
          <ul className="project__tech-list">
            <li>TypeScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit cum distinctio asperiores, ex fuga ullam
            blanditiis ipsam libero totam facilis, beatae eveniet doloribus nobis nihil aliquam possimus quidem
            laudantium suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ex officiis reiciendis in labore tempora eum,
            laudantium totam natus repudiandae commodi distinctio.
          </p>
          <ProjectActions />
        </div>
        <div className="project__img">
          <img src="/nsn-dev.png" alt="test picture" />
        </div>
      </div>
    </>
  );
}
