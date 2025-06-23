import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function Paragraph() {
  const language = useContext(LanguageContext);
  return <p id="favoriteLanguage">favorite programing language: {language}</p>;
}
