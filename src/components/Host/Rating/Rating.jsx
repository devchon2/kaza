import React from 'react';
import style from './Rating.module.css';
import active from '../../../assets/pictures/activeStar.png';
import inactive from '../../../assets/pictures/inactiveStar.png';

// Composant Rating qui affiche une note sous forme d'étoiles
function Rating({ rate }) {

  let fullstars = [];

  // Boucle pour afficher les étoiles actives
  for (let i = 0; i <= rate - 1; i += 1) {
    fullstars.push(<img key={Math.random()} className={style.activeStars} src={active} alt={rate} />);
  }

  // Si la note est inférieure à 5, affiche les étoiles inactives pour compléter
  if (fullstars.length < 5) {
    const emptyNbr = (5 - rate);

    for (let i = 0; i < emptyNbr; i += 1) {
      fullstars.push(<img key={Math.random()} className={style.inactiveStars} src={inactive} alt={rate} />);
    }
  }

  return (
    <div className={style.rating}>{fullstars}</div>
  );
}

export default Rating;
