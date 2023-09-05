import { Link } from 'react-router-dom'

export default function MainErrorPage() {
  return (
    <>
      <div className="Error-Main_Component">
        <div className="Error-Main_Component_Msg">
          <h1 className="Error_404">404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <Link className="BackLink" to="/">
          Retourner a la page d'accueil
        </Link>
      </div>
    </>
  );
}
