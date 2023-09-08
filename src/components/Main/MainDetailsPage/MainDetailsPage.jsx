import Datas from '../../../datas/DatasControlers.js'
import Collapsible from '../../Collapsible/Collapsible.jsx'
import style from './MainDetailsPage.module.css'
import { useState } from 'react';
import Host from '../../Host/Host.jsx';
import CoverDetails from '../../Cover/CoverDetails/CoverDetails.jsx';

export default function MainDetailsPage({ pageId }) {
  const item = Datas.find(data => data.id === pageId);
  const {  title, location, rating, host, description,equipments,cover,tags } = item
  const { name, picture } = host
  



  const [Toggle, setToggle] = useState(false)
  const [Toggle2, setToggle2] = useState(false)

  const handleCollapse = () => {
    setToggle(!Toggle)
  }
  const handleCollapse2 = () => {
    setToggle2(!Toggle2)
  }

  

  return (
      <main className={style.MainDetailsPage}>
        <CoverDetails title={title} img={cover} />
          <Host title={title} location={location} tags={tags}  rating={rating} hostname={name} hostPicture={picture}/>          
        <div className={style.fullContent}>
          <Collapsible action={handleCollapse} type='Description' content={[description]} state={Toggle} />
          <Collapsible action={handleCollapse2} type='Équipements' content={equipments} state={Toggle2} />
        </div>
    </main >
    )
}