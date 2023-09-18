import style from './Carrousel.module.css';
import React, { useState } from 'react';
import left from '../../assets/pictures/Carrousel/leftArrow.png';
import right from '../../assets/pictures/Carrousel/rightArrow.png';

// Fonction Carrousel qui affiche un carrousel d'images
export default function Carrousel({ pictures, title }) {
  const [index, setIndex] = useState(0);
  const length = pictures.length;

  // Fonction pour passer à l'image précédente
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  // Fonction pour passer à l'image suivante
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  // Affichage du compteur d'image en cours
  const counter = `${index + 1}/${length}`;
  // Affichage des flèches de navigation seulement si plus d'une image est présente
  const displayArrow = length <= 1 ? style.arrowInactive : style.arrowActive;
  // Affichage du compteur seulement si plus d'une image est présente
  const displayCounter = length > 1 ? style.counter : style.hiddenCounter;

  return (
    <div className={style.carrousel}>
      <img className={style.coverImg} src={pictures[index]} alt={title} />
      <img className={`${style.prev} ${displayArrow}`} src={left} onClick={handlePrevious} alt='Previous ' />
      <div className={displayCounter}>{counter}</div>
      <img className={`${style.next} ${displayArrow}`} src={right} onClick={handleNext} alt='Next ' />
    </div>
  );
}
