import Header from '../../components/Header/Header'
import MainErrorPage from '../../components/Main/MainError/MainError';
import style from './ErrorPage.module.css'

export default function ErrorPage(){
  return (
    <div className={style.ErrorPage}>
      <Header />
      <MainErrorPage />
    </div>
  );
}