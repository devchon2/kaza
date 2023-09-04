import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

export default function ErrorPage(){
  return (
    <div className="ErrorPage">
      <Header />
      <section>
        <h1> 404 </h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </section>
      <Link to='/HomePage'>Retourner a la page d'accueil</Link>
      <Footer />
    </div>
  );
}