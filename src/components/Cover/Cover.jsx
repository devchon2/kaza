import { useLocation } from 'react-router-dom';

export default function Cover () {
  const location = useLocation();
  let coverImage;
  let Alt

  switch (location.pathname) {
    case '/':
      coverImage = './assets/pictures/HomePageCover.png'
      Alt = 'Rochers en bord de mer avec des embruns'
      break;
    case '/About':
      coverImage = './assets/pictures/AboutCover.png';
      Alt = 'Paysage Montagneux'
      break;

    default:
      coverImage = './assets/pictures/HomePageCover.png';
      Alt = 'Rochers en bord de mer avec des embruns'

  }

  return (
    <section className='App-Cover'>
     <img className='App-Cover-Img' src= {coverImage} alt={Alt}/>
    </section>
    )
  
}