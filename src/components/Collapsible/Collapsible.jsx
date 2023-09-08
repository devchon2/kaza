import style from "./Collapsible.module.css";

export default function Collapsible({content,action,state, type}) {
  

  return (
    <div className={style.container}>
      <button onClick={action} className={style.button} >
        {type}
      </button >
      {state && <div className={style.content + ' '}>
       {content.map(element => <p key={content.indexOf(element)} className={style.listItem}>{element}</p>)}
      </div>}
    </div>
  )
}
