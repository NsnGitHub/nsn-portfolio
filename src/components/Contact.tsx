import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <ul className="contact__list">
      <li>
        <span
          onClick={() => {
            navigator.clipboard.writeText("awc28@sfu.ca");
          }}
        >
          <EnvelopeClosedIcon height="1.5rem" width="1.5rem" />
        </span>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ansonwmchan/" target="_blank">
          <LinkedInLogoIcon height="1.5rem" width="1.5rem" />
        </a>
      </li>
      <li>
        <a href="https://github.com/NsnGitHub" target="_blank">
          <GitHubLogoIcon height="1.5rem" width="1.5rem" />
        </a>
      </li>
    </ul>
  );
}
