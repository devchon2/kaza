import style from './Cover.module.css'
export default function Cover ({type,title,img}) {
  return (
    <section className={style.cover + ' ' + type}>
     <h1 className={style.title + ' ' + type}>{title}</h1>
     <img className={style.coverImg + ' ' + type} src={img} alt={title}/>
    </section>
    )
  
}