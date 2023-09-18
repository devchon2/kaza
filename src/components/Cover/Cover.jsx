import style from './Cover.module.css';

// Fonction Cover qui affiche une couverture avec un titre et une image
export default function Cover({ type, title, img }) {
  // Affichage conditionnel du titre en fonction du type
  const titleDisplay = type === 'main' ? <h1 className={style.titleH1}>{title}</h1> : '';

  // Détermination de la classe CSS en fonction du type
  const clsName = type === 'about' ? style.about : style.main;

  return (
    <section className={clsName}>
      <div className={style.title}>
        {titleDisplay}
      </div>
      <img className={`${style.coverImg} ${type}`} src={img} alt={title} />
    </section>
  );
}
