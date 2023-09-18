import { Link } from "react-router-dom";
import style from "./Card.module.css";

// Fonction Card qui affiche une carte avec un titre et une image
export default function Card({ title, img, id }) {
  return (
    // Utilisation du composant Link pour créer un lien vers la page de détails
    <Link to={`/Details/${id}`} id={id} className={style.container}>
      {/* Balise img pour afficher l'image de la carte */}
      <img className={style.cover} src={img} alt={title} />
      {/* Balise h3 pour afficher le titre de la carte */}
      <h3 className={style.title}>{title}</h3>
    </Link>
  );
}
