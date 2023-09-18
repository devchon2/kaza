import { Navigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import MainDetailsPage from "../../components/Main/MainDetailsPage/MainDetailsPage.jsx";
import style from "./DetailsPage.module.css";
import Datas from "../../datas/DatasControlers.js";

// Composant DetailsPage qui affiche les détails d'une page en fonction de son ID
export default function DetailsPage() {
  const urlIdObject = useParams('id');
  const { id } = urlIdObject;
  console.log(id);

  // Vérifie si l'ID existe dans les données fournies
  const isExist = Datas.map(data => data.id).includes(id);
  console.log(isExist);

  if (isExist) {
    return (
      <div className={style.DetailsPage}>
        <Header />
        {/* Affichage de la page de détails principale en fonction de l'ID */}
        <MainDetailsPage pageId={id} />
        <Footer />
      </div>
    );
  } else {
    // Redirection vers la page d'erreur 404 si l'ID n'existe pas
    return <Navigate to='/404' />;
  }
}
