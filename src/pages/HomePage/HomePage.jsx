import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Cover from '../../components/Cover/Cover.jsx';
import coverImg from '../../pictures/HomePageCover.png';
import style from './HomePage.module.css'

export default function HomePage(){
  return (
    <div className={style.HomePage}>
      <Header />
      <Cover title='homepage_cover' img={coverImg} />
      <div className={style.HomePage}>hello page accueil!</div>
      <Footer />
    </div>
  );
}