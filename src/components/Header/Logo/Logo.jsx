import style from './Logo.module.css'
import img from '../../../assets/Logos/HeaderLogo.png'

export default function Logo() {
  return (
  <img className={style.Logo} src={img} alt='Logo du site Kaza'></img>
  )
}