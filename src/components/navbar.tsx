import '../styles/navbar.css';
import email_logo from '../assets/email_logo.svg';
import linkedin_logo from '../assets/linkedin_logo.svg';
import github_logo from '../assets/github_logo.svg';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <div className="navButton">
                    <div>Logo</div>
                    <div className="underline"></div>
                </div>
                <div className="navButton">
                    <div>About</div>
                    <div className="underline"></div>
                </div>
                <div className="navButton">
                    <div>Projects</div>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="navContainer">
                <div className="contact">
                    <div className="contactIcons navButtonText">
                        <span><img src={email_logo} alt="Email logo"/></span>
                        <span><img src={linkedin_logo} alt="LinkedIn logo"/></span>
                        <span><img src={github_logo} alt="GitHub logo"/></span>
                    </div>
                    <div>Contact</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;