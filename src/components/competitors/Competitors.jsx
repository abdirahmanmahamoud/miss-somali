import style from './competitors.module.scss'
import Competitor from '../competitor/competitor';
import { useSelector } from 'react-redux';
const Competitors = () => {
    const {competitors} = useSelector((store) => store.competitor);
  return (
    <div className={style.competitors_container}>
        <div className={style.competitors_header}>
            <span>MissSomali</span>
            <p>
                Built with React.js — the template is a well-structured, thoughtfully
                componentized Next.js project, giving you a codebase that’s productive
                and enjoyable to work in.
            </p>
        </div>
        <div className={style.competitor}>
            {
                competitors.map((competitor) =>(
                    <Competitor key={competitor.Id} competitor={competitor}/> 
                ))
            }
        </div>
    </div>
  )
}

export default Competitors