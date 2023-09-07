import Datas from '../../../datas/DatasControlers.js'
import Cover from '../../Cover/Cover.jsx';
import Description from '../../Description/Description'
import Equipments from '../../Equipments/Equipments'
import style from './MainDetailsPage.module.css'


export default function MainDetailsPage({ pageId }) {
  const item = Datas.filter(data => data.id === pageId)['0']
  const { cover, title, description, equipments} = item
  return (

    <main className={style.MainDetailsPage}>
      <Cover type='details' img={cover} title={title} />
      <div className={style.fullContent}>
        <Description description={description} />
        <Equipments equipments={equipments} />
        </div>

    </main>
  )
}