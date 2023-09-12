import style from './Tag.module.css'

export default function Tag({tag}){
  return (
    <label key={tag} className={style.tag}>{tag}</label>
  )
}