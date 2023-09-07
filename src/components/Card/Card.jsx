import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ title, img, id }) {
  return (
    
    <Link to={`/Details/${id}`} id={id} className={style.container}>
      <img className={style.cover} src={img} alt={title} />
      <h3 className={style.title}>{title}</h3>
    </Link>
  );
}
