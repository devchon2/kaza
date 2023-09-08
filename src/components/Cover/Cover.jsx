import style from './Cover.module.css'
export default function Cover ({type,title,img}) {
  return (
    <section className={style.cover + ' ' + type}>
     <div className={style.title}>
        
    </div><h1 className={style.titleH1}>
          {title}
        </h1>
     <img className={style.coverImg + ' ' + type} src={img} alt={title}/>
    </section>
    )
  
}