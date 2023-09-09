import style from './Carrousel.module.css'
import React, { useState } from 'react';
import left from '../../assets/pictures/Carrousel/leftArrow.png'
import right from '../../assets/pictures/Carrousel/rightArrow.png'


export default function Carrousel({pictures, title}) {
const [index, setIndex ] = useState(0);
const length = pictures.length;

const handlePrevious = () => {
const newIndex = index - 1;
setIndex(newIndex < 0 ? length -1 : newIndex);
};

const handleNext = () => {
const newIndex = index + 1;
setIndex(newIndex >= length ? 0 : newIndex);
};

return (
<div className={style.carrousel}>
  <img className={style.coverImg} src={pictures[index]} alt={title} />
  <img className={style.prev} src={left} onClick={handlePrevious} alt='Previous ' ></img>
  <img className={style.next} src={right} onClick={handleNext} alt='Next ' ></img>

</div>
);
};
