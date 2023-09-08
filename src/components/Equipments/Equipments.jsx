import style from "./Equipments.module.css";

export default function Description({equipments,action,state}) {
  
console.log(equipments)
  return (
    <div className={style.equipContainer}>
      <button onClick={action} className={style.button + ' ' + state} >
        Equipements
      </button >
      <div className={style.equipmentsList + ' ' + state}>
        {equipments.map(item => <p key={item} className={item}>{item}</p>)}
        
          </div>
    </div>
  )
}
