    import Modal from 'react-modal';
    import style from './modal.module.scss';
    import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
    import { useSelector,useDispatch } from 'react-redux';
    import { handleModal } from '../../features/modal/modalSlice';
    import { addVoteToCompetitor, decreaseVote, inCreaseVote, resetState } from '../../features/competitors/competitorsSlice';

    const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
    };
    Modal.setAppElement('#root');
    const VoteModal = () => {
        let subtitle;
    const dispatch = useDispatch();
    const {isOpen} = useSelector((store) => store.modal);
    const {currentCompetitor,voteCount} = useSelector((store) => store.competitor);

    function closeModal() {
        dispatch(handleModal());
    }
    if(!currentCompetitor) return;
    const backgroundStyle = {
        width: "100%",
        height: '500px',
        background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${currentCompetitor.Photo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addVoteToCompetitor(currentCompetitor.Id));
        dispatch(resetState());
        closeModal();
    }
    return (
        <div>
            <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            className={style.modal}
            overlayClassName={style.overlay}>
                <div className={style.modal_container}>
                    <div className={style.competitor_info}>
                        <div style={backgroundStyle}></div>
                        <div className={style.bio}>
                            <div className={style.divider}>
                                <label>Name</label>
                                <span>{currentCompetitor.FirstName + ' ' + currentCompetitor.LastName}</span>
                            </div>
                            <div className={style.divider}>
                                <label>State</label>
                                <span>{currentCompetitor.RepresentingState}</span>
                            </div>
                            <div className={style.divider}>
                                <label>Background Study</label>
                                <span>{currentCompetitor.PersonalBackground}</span>
                            </div>
                            <div className={style.divider}>
                                <label>Employment School</label>
                                <span>{currentCompetitor.EmploymentorSchool}</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.vote_container}>
                        <div className={style.vote_count}>
                            <span>Purchase Votes</span>
                            <div className={style.vote_controls}>
                                <button 
                                type='button'
                                onClick={()=> dispatch(decreaseVote())}
                                >
                                    <AiOutlineMinus className={style.icon}/>
                                </button>
                                <span>{voteCount}</span>
                                <button 
                                type='button'
                                onClick={()=> dispatch(inCreaseVote())}
                                >
                                    <AiOutlinePlus className={style.icon}/>
                                </button>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <span>Pay with Evc,Sahal,Zaad</span>
                        <input type='number' placeholder='enter your phone number start with' className={style.form_control} />
                        <button type='submit'>Vote Now</button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
    }

    export default VoteModal;