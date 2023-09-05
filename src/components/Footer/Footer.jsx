import style from './Footer.module.css'

export default function Footer(){
  return (
    <footer className={style.Footer}>
        <img className={style.Footer_Logo} src='./assets/Logos/FooterLogo.png' alt="Logo de Kaza en blanc sur fond noir"></img>
        <p className={style.Footer_Copyrights}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}