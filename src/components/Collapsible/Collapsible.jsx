import { useState } from "react";
import style from "./Collapsible.module.css";
import arrowUp from '../../assets/pictures/ArrowUp.png'


export default function Collapsible({content,name, type}) {
  const [Toggle, setToggle] = useState({
    state: false,
    direction: 'down'})

    const dir = Toggle.state === true ? 'up' : 'down'
    const clsName = dir === 'up' ? style.arrowUp : style.arrowDown
  const handleCollapse = () => {
    setToggle({
      state: !Toggle.state,
      direction :dir}
      )
  }
  
  const styleType = type === 'large' ? style.large : type === 'medium' ? style.medium: style.small

  return (
    <div className={styleType}>
      <div  className={style.collapseHeader} >
        <p className={style.name}>{name}</p> 
        <img onClick={handleCollapse} className={clsName} role='button' src={arrowUp} alt="Collapse" />
      </div >
      {Toggle.state && <div className={style.content + ' '}>
       {content.map(element => <p key={content.indexOf(element)} className={style.listItem}>{element}</p>)}
      </div>}
    </div>
  )
}
