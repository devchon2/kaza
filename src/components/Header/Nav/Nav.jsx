import { NavLink } from "react-router-dom";
import style from './Nav.module.css';
export default function Nav() {
  return (
    <nav className={style.container}>    
          <NavLink className={style.navLink1} to="/">Accueil</NavLink>
          <NavLink className={style.navLink2} to="/About">A propos</NavLink>
    </nav>
  );}