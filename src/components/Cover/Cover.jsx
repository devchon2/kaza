import style from './Cover.module.css'
export default function Cover ({type,title,img}) {
  const titleDisplay = type === 'main' ? <h1 className={style.titleH1}>Chez vous et partout ailleurs</h1> : ''

  return (
    <section className={style.cover + ' ' + type}>
     <div className={style.title}>
      {titleDisplay}
    </div>
    
          
     <img className={style.coverImg + ' ' + type} src={img} alt={title}/>
    </section>
    )
  
}