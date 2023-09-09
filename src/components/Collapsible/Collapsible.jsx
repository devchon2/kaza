import { useState } from "react";
import style from "./Collapsible.module.css";
export default function Collapsible({content, type}) {
  const [Toggle, setToggle] = useState(false)

  const handleCollapse = () => {
    setToggle(!Toggle)
  }
  

  return (
    <div className={style.container}>
      <button onClick={handleCollapse} className={style.button} >
        {type}
      </button >
      {Toggle && <div className={style.content + ' '}>
       {content.map(element => <p key={content.indexOf(element)} className={style.listItem}>{element}</p>)}
      </div>}
    </div>
  )
}
