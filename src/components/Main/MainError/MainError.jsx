import { Link } from 'react-router-dom'
import style from './MainError.module.css'


export default function MainErrorPage() {
  return (
    
      <main className={style.MainComponent}>
        <div className={style.MainComponentMsg}>
          <h1 className={style.ErrorType}>
            404
            </h1>
          <p className={style.oups}>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <Link className={style.Backlink} to="/">
          Retourner a la page d'accueil
        </Link>
      </main>
    
  );
}
