import { useLocation } from 'react-router-dom'
import MainHomePage from './Main-Homepage/Main-HomePage';
import MainAbout from './Main-About/Main-About';
import MainErrorPage from './Main-Error/Main-Error'




export default function Main() {
  const location = useLocation();

  switch (location.pathname) {
    case '/':
      return (
        <MainHomePage/>
      )
    case '/About':
      return (
        <MainAbout/>
      )
    default:
      return (
        <MainErrorPage />
      )
  }
}
