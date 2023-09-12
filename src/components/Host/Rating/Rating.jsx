import React from 'react'
import style from './Rating.module.css'
import active from '../../../assets/pictures/activeStar.png'
import inactive from '../../../assets/pictures/inactiveStar.png'

function Rating({ rate }) {
console.log(Math.random())

  console.log('rate',rate)
  let fullstars = []
  for (let i = 0; i <= rate -1 ;i+=1){
    fullstars.push(<img key={Math.random()}  className={style.activeStars} src={active} alt={rate}></img>)
  }


  if (fullstars.length < 5){
    const emptyNbr = (5- rate)

    for (let i = 0; i < emptyNbr ;i+=1){
      fullstars.push(<img key={Math.random()} className={style.inactiveStars} src={inactive} alt={rate}></img>)
    }
  }
  console.log(fullstars)
  
  return (
    <div className={style.rating}>{fullstars}</div>
  )
}

export default Rating




