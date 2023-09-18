import style from './Footer.module.css';
import img from '../../assets//Logos/FooterLogo.png';

// Fonction Footer qui affiche le pied de page
export default function Footer() {
  return (
    <footer className={style.container}>
      <img className={style.Logo} src={img} alt="Logo de Kaza en blanc sur fond noir" />
      <p className={style.Copyrights}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
