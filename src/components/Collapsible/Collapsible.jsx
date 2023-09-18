import { useState } from "react";
import style from "./Collapsible.module.css";
import arrowUp from '../../assets/pictures/ArrowUp.png'

// Fonction Collapsible qui affiche un élément pouvant être replié/déplié
export default function Collapsible({ content, name, type }) {
  const [Toggle, setToggle] = useState({
    state: false,
    direction: 'down'
  });

  // Détermine la direction de la flèche en fonction de l'état de Toggle
  const dir = Toggle.state === true ? 'up' : 'down';
  const clsName = dir === 'up' ? style.arrowUp : style.arrowDown;

  // Fonction pour basculer l'état de l'élément replié/déplié
  const handleCollapse = () => {
    setToggle({
      state: !Toggle.state,
      direction: dir
    });
  }
  
  // Détermine la classe de style en fonction du type passé en prop
  const styleType = type === 'large' ? style.large : type === 'medium' ? style.medium : style.small;

  return (
    <div className={styleType}>
      <div onClick={handleCollapse} className={style.collapseHeader}>
        <p className={style.name}>{name}</p>
        <img className={clsName} src={arrowUp} alt="Collapse" />
      </div>
      {Toggle.state && (
        <div className={style.content}>
          {/* Affiche le contenu s'il est déplié */}
          {content.map((element, index) => (
            <p key={index} className={style.listItem}>
              {element}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
