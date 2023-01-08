import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import content from "../../../content.json";
import { getLanguageSelector } from "../../../store/selectors";
import style from "./ProjectCard.module.css";

type CardProps = {
  image: string;
  id: string;
  children: React.ReactNode;
};

const ProjectCard = ({ image, id, children }: CardProps) => {
  const language = useSelector(getLanguageSelector());

  return (
    <div className="lg:w-1/4 md:w-1/2 m-2">
      <div className={style.portfolio_wrap}>
        <img src={image} alt="cat" />
        <div className={style.portfolio_links}>
          <Link to={`../projects/${id}`}>
            {content[language as keyof typeof content].aboutProjectButton}
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 mt-1 rounded-md">
        <h1>{children}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
