import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MainErrorPage from '../../components/Main/MainError/MainError.jsx';
export default function ErrorPage(){
  return (
    <div className='ErrorPage'>
      <Header />
      <MainErrorPage />
      <Footer />
    </div>
  );
}