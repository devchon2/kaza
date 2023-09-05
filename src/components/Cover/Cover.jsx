import style from './Cover.module.css'
export default function Cover ({ title,img}) {
  return (
    <section className={style.appCover}>
     <h1>{title}</h1>
     <img className={style.appCoverImg} src={img} alt={title}/>
    </section>
    )
  
}