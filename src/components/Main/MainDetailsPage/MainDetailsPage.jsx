import Datas from '../../../datas/DatasControlers.js'
import Cover from '../../Cover/Cover.jsx';
import Description from '../../Description/Description'
import Equipments from '../../Equipments/Equipments'
import style from './MainDetailsPage.module.css'
import { useState } from 'react';
import Host from '../../Host/Host.jsx';

export default function MainDetailsPage({ pageId }) {
  const item = Datas.find(data => data.id === pageId);
  const {  title, location, rating, host, description,equipments } = item
  const { name, picture } = host
  



  const [Toggle, setToggle] = useState('false')
  const [Toggle2, setToggle2] = useState('false')

  const handleDescription = () => {
    setToggle(!Toggle)
    console.log('description', Toggle)
  }

  const handleEquipments = () => {
    setToggle2(!Toggle2)
    console.log('equipments', Toggle2)
  }

  return (
      <main className={style.MainDetailsPage}>
        <Cover type='details' img={item.cover} />
          <Host title={title} location={location}   rating={rating} hostName={name} hostPicture={picture}/>          
        <div className={style.fullContent}>
          <Description action={handleDescription} description={description} state={Toggle} />
          <Equipments action={handleEquipments} equipments={equipments} state={Toggle2} />
        </div>
    </main >
    )
}