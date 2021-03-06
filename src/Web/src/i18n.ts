import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en
		},
		lng: "en",
		fallbackLng: {
			default: ["en"]
		},
		debug: true,
		ns: ["common"],
		defaultNS: "common",
		react: {
			wait: true,
		}
	});

export default i18n;