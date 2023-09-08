import style from "./Host.module.css";

export default function Host({
  title,
  location,
  rating,
  hostname,
  hostPicture,
  tags
}) {
  const [name, lastName] = hostname.split(" ");

  return (
    <section className={style.host}>
      <div className={style.left}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.location}>{location}</p>
        {tags.map(tag => <label key={tag} className={style.tag}>{tag}</label>)}
      </div>

      <div className={style.right}>
        <div className={style.hostInfos}>
          <div className={style.hostName}>
            <p>{name}</p>
            <p>{lastName}</p>
          </div>
          <img className={style.hostPicture} src={hostPicture} alt={`portrait de ${hostname}`}></img>
        </div>
        <div className={style.rating}>{rating}</div>
      </div>
    </section>
  );
}
