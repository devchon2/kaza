import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainHomePage from '../../components/Main/MainHomepage/MainHomePage';

import style from './HomePage.module.css';

export default function HomePage(){
  return (
    <div className={style.HomePage}>
      <Header />
      <MainHomePage />
      <Footer />
    </div>
  );
}