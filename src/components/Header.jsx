import { useContext, useEffect, useState } from "react";
import { Animate, AnimateGroup } from "react-simple-animate";
import translateIcon from "../assets/translate.svg";
import setupImg from "../assets/setup.png";
import content from "../assets/content.json";
import { LanguageContext } from "./context";

const Header = () => {
	const { language, setLanguage } = useContext(LanguageContext);
	const [play, setPlay] = useState(false);
	const [items, setItems] = useState([]);

	const getItems = (lang) => {
		setPlay(false);

		fetch("/contentToAnimate.json")
			.then((response) => response.json())
			.then((data) => {
				setItems(data[lang].welcome.split(""));
				setTimeout(() => {
					setPlay(true);
				}, 50);
			})
			.catch((error) => {
				console.error("Error al cargar el JSON:", error);
			});
	};

	const props = {
		start: { opacity: 0, transform: "translateY(0)" },
		end: { opacity: 1, transform: "translateY(-10px)" },
	};

	useEffect(() => {
		getItems(language);
	}, [language]);

	const changeLanguage = () => {
		const newLanguage = language === "english" ? "spanish" : "english";
		setLanguage(newLanguage);
	};

	return (
		<>
			<div className="translate-bar">
				<button onClick={changeLanguage} className="translate-button">
					<p>{language === "english" ? "EN" : "ES"}</p>
					<img src={translateIcon} alt="Translate Icon" className="translate-icon" />
				</button>
			</div>
			<header>
				<img src={setupImg} alt="Setup" className="setup-img" />
				<div className="header-content">
					<div className="welcome-message">
						<AnimateGroup play={play}>
							{items.map((item, index) => (
								<Animate key={`${language}-${index}`} {...props} sequenceIndex={index}>
									<p>{item}</p>
								</Animate>
							))}
						</AnimateGroup>
					</div>

					<p className="presentation-message">{content[language].presentation}</p>
				</div>
			</header>
			<svg
				className="svg-curve"
				viewBox="0 0 1440 79"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
			</svg>
		</>
	);
};

export default Header;
