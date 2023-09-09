import Datas from '../../../datas/DatasControlers.js'
import Collapsible from '../../Collapsible/Collapsible.jsx'
import style from './MainDetailsPage.module.css'
import Host from '../../Host/Host.jsx';
import Carrousel from '../../Carrousel/Carrousel.jsx';

export default function MainDetailsPage({ pageId }) {
  const item = Datas.find(data => data.id === pageId);
  console.log(item)
  const {  title, location, rating, host, description,equipments,cover,tags, pictures } = item
  const { name, picture } = host
  
  return (
      <main className={style.mainDetailsPage}>
        <Carrousel title={title} pictures={[cover, ...pictures]} />
          <Host title={title} location={location} tags={tags}  rating={rating} hostname={name} hostPicture={picture}/>          
        <div className={style.fullContent}>
          <Collapsible type='Description' content={[description]}  />
          <Collapsible type='Équipements' content={equipments}  />
        </div>
    </main >
    )
}