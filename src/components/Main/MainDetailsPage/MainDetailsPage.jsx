import Datas from '../../../datas/DatasControlers.js';
import Collapsible from '../../Collapsible/Collapsible.jsx';
import style from './MainDetailsPage.module.css';
import Host from '../../Host/Host.jsx';
import Carrousel from '../../Carrousel/Carrousel.jsx';

// Composant MainDetailsPage qui affiche la page de détails principale
export default function MainDetailsPage({ pageId }) {
  const item = Datas.find(data => data.id === pageId);
  const { title, location, rating, host, description, equipments, tags, pictures } = item;
  const { name, picture } = host;

  return (
    <main className={style.mainDetailsPage}>
      {/* Affichage du carrousel d'images */}
      <Carrousel title={title} pictures={[...pictures]} />
      {/* Affichage des informations de l'hôte */}
      <Host title={title} location={location} tags={tags} rating={rating} hostname={name} hostPicture={picture} />
      <div className={style.fullContent}>
        {/* Collapsibles pour afficher la description et les équipements */}
        <Collapsible type='medium' name='Description' content={[description]} />
        <Collapsible type='medium' name='Équipements' content={equipments} />
      </div>
    </main>
  );
}
