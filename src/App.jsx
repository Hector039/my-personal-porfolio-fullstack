import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Main from "./components/Main";
import { LanguageContext } from "./components/context";
import { useState } from "react";

function App() {
	const [language, setLanguage] = useState("english");

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			<Header />
			<Main />
			<Footer />
		</LanguageContext.Provider>
	);
}

export default App;
