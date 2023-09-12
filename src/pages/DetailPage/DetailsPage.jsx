import { Navigate, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import MainDetailsPage from "../../components/Main/MainDetailsPage/MainDetailsPage.jsx";
import style from "./DetailsPage.module.css";
import Datas from "../../datas/DatasControlers.js";

export default function DetailsPage() {
  const urlIdObject = useParams('id')
 const {id} = urlIdObject
 console.log(id)
 const isExist = Datas.map(data => data.id).includes(id)
console.log(isExist)
 
if(isExist){
  return (
    <div className={style.DetailsPage}>
      <Header />
      <MainDetailsPage pageId={id} />
      <Footer />
    </div>
  );
} else {
  return (
  <Navigate to='/404'/>
  )
}}
