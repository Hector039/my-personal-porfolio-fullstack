import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import emailIcon from "../assets/email.svg";

const Footer = () => {
	return (
		<>
			<svg
				className="svg-curve"
				viewBox="0 0 1440 79"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z"></path>
			</svg>

			<footer>
				<p>© 2025 Hector Mandril.</p>
				<div className="social-links">
					<a
						href="https://github.com/Hector039"
						target="_blank"
						rel="noopener noreferrer"
						className="network-icon"
					>
						<img src={githubIcon} alt="GitHub Icon" />
					</a>
					<a
						href="https://www.linkedin.com/in/hector-mandril-full-stack-developer/"
						target="_blank"
						rel="noopener noreferrer"
						className="network-icon-linkedin"
					>
						<img src={linkedinIcon} alt="LinkedIn Icon" />
					</a>
					<a href="mailto:mandril.hector.gabriel@gmail.com" className="network-icon">
						<img src={emailIcon} alt="Email Icon" />
					</a>
				</div>
			</footer>
		</>
	);
};

export default Footer;
