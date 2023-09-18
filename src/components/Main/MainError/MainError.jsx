import { Link } from 'react-router-dom';
import style from './MainError.module.css';

// Composant MainErrorPage qui affiche une page d'erreur 404
export default function MainErrorPage() {
  return (
    <main className={style.MainComponent}>
      <div className={style.MainComponentMsg}>
        <h1 className={style.ErrorType}>404</h1>
        <p className={style.oups}>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      {/* Lien de retour vers la page d'accueil */}
      <Link className={style.Backlink} to="/">
        Retourner à la page d'accueil
      </Link>
    </main>
  );
}
