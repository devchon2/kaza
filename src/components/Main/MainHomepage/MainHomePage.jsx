import Card from "../../Card/Card.jsx";
import style from "./MainHomePage.module.css";
import Datas from "../../../datas/DatasControlers.js";
import Cover from "../../Cover/Cover";
import coverImg from "../../../assets/pictures/HomePageCover.png";

// Composant MainHomePage qui affiche la page d'accueil principale
export default function MainHomePage() {
  return (
    <main className={style.mainHomePage}>
      {/* Affichage de la couverture principale */}
      <Cover type="main" title='Chez vous, partout et ailleurs' img={coverImg} />
      <div className={style.fullContainer}>
        <div className={style.cardsContainer}>
          {/* Affichage des cartes à partir des données fournies */}
          {Datas.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} id={item.id} img={item.cover} />
          ))}
        </div>
      </div>
    </main>
  );
}
