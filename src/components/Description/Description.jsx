import style from "./Description.module.css";

export default function Description({description,action,state}) {
  

  return (
    <div className={style.descContainer}>
      <button onClick={action} className={style.button + ' ' + state} >
        description
      </button >
      <div className={style.description + ' ' + state}>
        <p>{description}</p>
      </div>
    </div>
  )
}
