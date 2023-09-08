import Cover from '../../Cover/Cover'
import style from './MainAbout.module.css'
import img from '../../../assets/pictures/AboutCover.png'

export default function MainAbout() {
  return (
    <>
      <Cover type='About' img={img} />
      <div className={style.mainAboutPage}>hello page About</div>
    </>
  );
}
