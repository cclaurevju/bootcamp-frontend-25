import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";

export default function MainSection({ changeLanguage }) {
  return (
    <div>
      <Paragraph />
      <Button onClick={changeLanguage}>toggle language</Button>
    </div>
  );
}
