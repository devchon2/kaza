import style from "./Host.module.css";

export default function Host({ title, location, rating, hostName, hostPicture }) {
  console.log('host Executé')
  return (

    <section className={style.host}>
      <div className={style.left}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.location}>{location}</p>


      </div>


      <div className={style.right}>
        <p className={style.hostName} hostname={hostName} >
          {hostName}
          <img src={hostPicture} alt={`portrait de ${hostName}`}>
          </img>
        </p>
        <div className={style.rating}>
          {rating}
        </div>
      </div>
    </section>
  );
}
