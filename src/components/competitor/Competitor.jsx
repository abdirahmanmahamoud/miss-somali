import style from './competitor.module.scss';
import { MdHowToVote } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { handleModal } from '../../features/modal/modalSlice';
import { setCurrentCompetitor } from '../../features/competitors/competitorsSlice';
const Competitor = ({competitor}) => {
    const backgroundStyle = {
		width: "100%",
		// height: "500px",
		background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${competitor.Photo})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};
  const dispatch = useDispatch();
  const voteNow = () =>{
    dispatch(setCurrentCompetitor(competitor));
    dispatch(handleModal());
  }
  return (
    <div className={style.competitor} style={backgroundStyle}>
        <div className={style.info}>
            <span className={style.name}>{competitor.FirstName +' '+ competitor.LastName}</span>
            <span className={style.state}>{competitor.RepresentingState}</span>
            <samp className={style.vote_count}>Total Votes: {competitor.NumberofVotes}</samp>
        </div>
        <div className={style.vote}>
            <MdHowToVote className={style.vote_icon} onClick={voteNow}/>
        </div>
    </div>
  )
}

export default Competitor;