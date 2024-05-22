import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <ul className="contact__list">
      <li>
        <EnvelopeClosedIcon height="1.5rem" width="1.5rem" />
      </li>
      <li>
        <LinkedInLogoIcon height="1.5rem" width="1.5rem" />
      </li>
      <li>
        <GitHubLogoIcon height="1.5rem" width="1.5rem" />
      </li>
    </ul>
  );
}
