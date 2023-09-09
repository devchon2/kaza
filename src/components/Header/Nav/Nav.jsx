import { NavLink } from "react-router-dom";
import style from './Nav.module.css';
export default function Nav() {
  return (
    <nav className={style.container}>    
          <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)} to="/">Accueil</NavLink>
          <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)} to="/About">A propos</NavLink>
    </nav>
  );}