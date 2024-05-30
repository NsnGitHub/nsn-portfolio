import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import "../styles/Contact.css";
import { useState } from "react";
import Modal from "./Modal";

export default function Contact() {
  const [showClipboardModal, setShowClipboardModal] = useState(false);

  const displayModalFor3Seconds = () => {
    if (showClipboardModal) {
      return;
    }

    setShowClipboardModal(true);

    setTimeout(() => {
      setShowClipboardModal(false);
    }, 3000);
  };

  const handleEmailIconClick = () => {
    navigator.clipboard.writeText("awc28@sfu.ca");
    displayModalFor3Seconds();
  };

  return (
    <>
      <ul className="contact__list">
        <li>
          {/* <a href="mailto:awc28@sfu.ca"> */}
          <span onClick={handleEmailIconClick}>
            <EnvelopeClosedIcon height="1.5rem" width="1.5rem" />
          </span>
          {/* </a> */}
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

      <Modal visible={showClipboardModal}>
        <h4>Email copied!</h4>
        <p>You can now paste it wherever you need.</p>
      </Modal>
    </>
  );
}
