import Nav from './Nav/Nav'
import style from './Header.module.css'
import Logo from './Logo/Logo'

export default function Header() {
  return (
    <header className={style.container}>
      <Logo />
      <Nav />
    </header>)
}
