import Cover from '../../Cover/Cover'
import style from './MainAbout.module.css'
import img from '../../../assets/pictures/AboutCover.png'
import Collapsible from '../../Collapsible/Collapsible.jsx'

export default function MainAbout() {
  const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

  const FiabilityContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."

  const ServiceContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de  perturbation du voisinage entraînera une exclusion de notre plateforme."
  
  const SecurityContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


  
  return (
    <div className={style.mainAboutPage}>
      <Cover img={img} type='detail' />
      <div className={style.collapseContainer}>
        <Collapsible  type='large' name='Fiabilité' content={[FiabilityContent]} />
        <Collapsible  type='large' name='Respect' content={[respectContent]} />
        <Collapsible  type='large' name='Service' content={[ServiceContent]} />
        <Collapsible type='large' name='Sécurité' content={[SecurityContent]} />
      </div>
    </div>
  );
}
