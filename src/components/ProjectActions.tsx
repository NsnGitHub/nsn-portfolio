import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import "../styles/ProjectActions.css";

export default function ProjectActions() {
  return (
    <ul className="project-actions">
      <li>
        <GlobeIcon height="1.5rem" width="1.5rem" />
      </li>
      <li>
        <GitHubLogoIcon height="1.5rem" width="1.5rem" />
      </li>
    </ul>
  );
}
