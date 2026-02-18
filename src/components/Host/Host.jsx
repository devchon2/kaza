import Tag from "../Tags/Tag.jsx";
import style from "./Host.module.css";
import Rating from "./Rating/Rating.jsx";

// Fonction Host qui affiche les informations d'un hôte
export default function Host({
  title,
  location,
  rating,
  hostname,
  hostPicture,
  tags
}) {
  // Sépare le nom et le prénom de l'hôte
  const [name, lastName] = hostname.split(" ");

  return (
    <section className={style.host}>
      <div className={style.left}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.location}>{location}</p>
        <div className={style.tagsContainer}>
          {/* Affiche les tags en utilisant le composant Tag */}
          {tags.map(tag => <Tag key={tag} tag={tag} />)}
        </div>
      </div>

      <div className={style.right}>
        <div className={style.hostInfos}>
          <div className={style.hostName}>
            <p>{name}</p>
            <p>{lastName}</p>
          </div>
          {/* Affiche l'image de l'hôte */}
          <img className={style.hostPicture} src={hostPicture} alt={`portrait de ${hostname}`} />
        </div>
        {/* Affiche la note de l'hôte en utilisant le composant Rating */}
        <Rating rate={rating} />
      </div>
    </section>
  );
}
