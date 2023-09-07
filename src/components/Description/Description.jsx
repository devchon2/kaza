import { useState } from "react";
import style from "./Description.module.css";

export default function Description({description}) {
  const [Toggle, setToggle] = useState('off')
  const handleClick = () => {
    setToggle('on')
  }

  return (
    <div className={style.descContainer}>
      <button onClick={handleClick} className={style.button + ' ' + Toggle} >
        description
      </button >
      <div className={style.description + ' ' + Toggle}>
        {description}
      </div>
    </div>
  )
}
