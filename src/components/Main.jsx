import cards from "./cards/cards.json";
import content from "../assets/content.json";
import githubIcon from "../assets/github.svg";
import { useContext } from "react";
import { LanguageContext } from "./context";

const Main = () => {
	const { language } = useContext(LanguageContext);
	return (
		<>
			<h1>{content[language].mainTile}</h1>
			<p className="main-subtitle">{content[language].mainSubtitle}</p>
			<div className="cards-container">
				{cards.map((item) => (
					<div key={item.id} className="card">
						<img src={item.img} alt="Image Card" className="card-img" />
						<div className="card-content">
							<h2>{item.title}</h2>
							<p className="card-description">{item.description}</p>
							<div className="card-footer">
								<p className="card-category">{item.category}</p>
								<a
									href={item.linkGithub}
									target="_blank"
									rel="noopener noreferrer"
									className="card-github-link"
								>
									<img src={githubIcon} alt="GitHub Icon" />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Main;
