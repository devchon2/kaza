import style from './Logo.module.css'
import img from '../../../assets/Logos/HeaderLogo.png'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to='/'> <img className={style.Logo} src={img} alt='Logo du site Kaza'></img>
</Link>
  )
}