import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import MainAbout from '../../components/Main/MainAbout/MainAbout.jsx';
import style from './AboutPage.module.css'

export default function AboutPage(props){
  return (
    <div className={style.AboutPage}>
      <Header />
      <MainAbout />
      <Footer />
    </div>
  );
}