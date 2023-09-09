import { NavLink } from "react-router-dom";
import style from './Nav.module.css';
export default function Nav() {
const condition = ({isActive}) => (isActive ? (`${style.navLink} ${style.active}`) : (`${style.navLink} ${style.inactive}`))

  return (
    <nav className={style.container}>    
          <NavLink className={condition} to="/">Accueil</NavLink>
          <NavLink className={condition} to="/About">A Propos</NavLink>
    </nav>
  );}