import { useState } from 'react'
import style from './Equipments.module.css'

export default function Equipments(equipments) {
  const [Toggle, setToggle] = useState('off')
  const handleClick = () => {
    setToggle('on')
  }

  return (
    <div className={style.equipContainer}>
      <button onClick={handleClick} className={style.button + ' ' + Toggle} >
        equipments
      </button >
      <div className={style.listContent + ' ' + Toggle}>
        Hello Equipments!
      </div>
    </div>
  )
}