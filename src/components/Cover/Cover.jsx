import { useLocation } from 'react-router-dom';

export default function Cover () {
  const location = useLocation();
  let coverImage;
  let Alt;
  let ClassName;
  switch (location.pathname) {
    case '/':
      coverImage = './assets/pictures/HomePageCover.png'
      Alt = 'Rochers en bord de mer avec des embruns'
      ClassName = 'HomePage-Cover App-Cover-Img'
      break;
    case '/About':
      coverImage = './assets/pictures/AboutCover.png';
      Alt = 'Paysage Montagneux'
      ClassName = 'About-Cover App-Cover-Img'
      break;

    default:
      coverImage = './assets/pictures/HomePageCover.png';
      Alt = 'Rochers en bord de mer avec des embruns'
      ClassName = 'HomePage-Cover App-Cover-Img'

  }

  return (
    <section className='App-Cover'>
     <img className={ClassName} src= {coverImage} alt={Alt}/>
    </section>
    )
  
}