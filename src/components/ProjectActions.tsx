import { GitHubLogoIcon } from "@radix-ui/react-icons";
import "../styles/ProjectActions.css";

type ProjectActionProps = {
  link: string;
};

export default function ProjectActions({ link }: ProjectActionProps) {
  return (
    <ul className="project-actions">
      {/* <li>
        <GlobeIcon height="1.5rem" width="1.5rem" />
      </li> */}
      <li>
        {link === "" ? (
          <></>
        ) : (
          <a href={link} target="_blank">
            <GitHubLogoIcon height="1.5rem" width="1.5rem" />
          </a>
        )}
      </li>
    </ul>
  );
}
