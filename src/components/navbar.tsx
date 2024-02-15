import '../styles/navbar.css';
import email_logo from '../assets/email_logo.svg';
import linkedin_logo from '../assets/linkedin_logo.svg';
import github_logo from '../assets/github_logo.svg';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <div className="navButton">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 1">
                            <g id="purple2">
                                <rect id="Rectangle 1" x="42.4272" y="22" width="60" height="7" rx="3.5" transform="rotate(58.9588 42.4272 22)" fill="#7E80C9" />
                                <rect id="Rectangle 2" x="11" y="69" width="30" height="7" rx="3.5" fill="#7E80C9" />
                                <rect id="Rectangle 3" x="9" y="73.3776" width="60" height="7" rx="3.5" transform="rotate(-58.9029 9 73.3776)" fill="#7E80C9" />
                            </g>
                            <g id="blue1">
                                <rect id="Rectangle 1_2" x="42.4272" y="22" width="60" height="7" rx="3.5" transform="rotate(58.9588 42.4272 22)" fill="#C6C7FF" />
                                <rect id="Rectangle 2_2" x="11" y="69" width="30" height="7" rx="3.5" fill="#C6C7FF" />
                                <rect id="Rectangle 3_2" x="9" y="73.3776" width="60" height="7" rx="3.5" transform="rotate(-58.9029 9 73.3776)" fill="#C6C7FF" />
                            </g>
                            <g id="purple1">
                                <rect id="Rectangle 1_3" x="60.4272" y="22" width="60" height="7" rx="3.5" transform="rotate(58.9588 60.4272 22)" fill="#7E80C9" />
                                <rect id="Rectangle 2_3" x="29" y="69" width="30" height="7" rx="3.5" fill="#7E80C9" />
                                <rect id="Rectangle 3_3" x="27" y="73.3776" width="60" height="7" rx="3.5" transform="rotate(-58.9029 27 73.3776)" fill="#7E80C9" />
                            </g>
                        </g>
                    </svg>

                </div>
                <div className="navButton">
                    <div className="navText">About</div>
                    <div className="underline"></div>
                </div>
                <div className="navButton">
                    <div className="navText">Projects</div>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="navContainer">
                <div className="contact">
                    <div className="contactIcons navButtonText">
                        <span><img src={email_logo} alt="Email logo" /></span>
                        <span><img src={linkedin_logo} alt="LinkedIn logo" /></span>
                        <span><img src={github_logo} alt="GitHub logo" /></span>
                    </div>
                    <div className="navButton">
                        <div className="navText">Contact</div>
                        <div className="underline"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;