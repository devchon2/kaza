import Card from "../../Card/Card.jsx";
import style from "./MainHomePage.module.css";
import Datas from "../../../datas/DatasControlers.js";
import Cover from "../../Cover/Cover";
import coverImg from "../../../assets/pictures/HomePageCover.png";

export default function MainHomePage() {
  return (
    <main className={style.mainHomePage}>
      <Cover type="main" title='Chez vous, partout et ailleurs' img={coverImg} />
      <div className={style.fullContainer}>
        <div className={style.cardsContainer}>
          {Datas.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} id={item.id} img={item.cover}/>
        ))}
        </div>
      </div>
    </main>
  );
}
