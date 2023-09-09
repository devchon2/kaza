import Cover from '../../Cover/Cover'
import style from './MainAbout.module.css'
import img from '../../../assets/pictures/AboutCover.png'
import Collapsible from '../../Collapsible/Collapsible.jsx'
import { useState } from 'react'

export default function MainAbout() {
  const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

  const FiabilityContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."

  const ServiceContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de  perturbation du voisinage entraînera une exclusion de notre plateforme."
  
  const SecurityContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


  const [Fiability, setFiability] = useState(false)
  const [Respect, setRespect] = useState(false)
  const [Service, setService] = useState(false)
  const [Security, setSecurity] = useState(false)

  const handleFiability = () => {
    setFiability(!Fiability)
  }
  const handleRespect = () => {
    setRespect(!Respect)
  }
  const handleService = () => {
    setService(!Service)
  }
  const handleSecurity = () => {
    setSecurity(!Security)
  }
  return (
    <div className={style.mainAboutPage}>
      <Cover img={img} />
      <div className={style.collapseContainer}>
        <Collapsible action={handleFiability} state={Fiability} type='Fiabilité' content={[FiabilityContent]} />
        <Collapsible action={handleRespect} state={Respect} type='Respect' content={[respectContent]} />
        <Collapsible action={handleService} state={Service} type='Service' content={[ServiceContent]} />
        <Collapsible action={handleSecurity} state={Security} type='Sécurité' content={[SecurityContent]} />
      </div>
    </div>
  );
}
