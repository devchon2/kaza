import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import MainDetailsPage from "../../components/Main/MainDetailsPage/MainDetailsPage.jsx";
import style from "./DetailsPage.module.css";

export default function DetailsPage() {
  const id = useLocation().pathname.replace("/Details/", "");

  return (
    <div className={style.DetailsPage}>
      <Header />
      <MainDetailsPage pageId={id} />
      <Footer />
    </div>
  );
}
