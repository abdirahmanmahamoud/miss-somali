import style from './timer.module.scss';
import Countdown from 'react-countdown';
import Time from './Time';
const Timer = () => {
    const Completion = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completion />;
  } else {
    // Render a countdown
    return <Time days={days} hours={hours} minutes={minutes} seconds={seconds}/>;
  }
};
  return (
    <div className={style.countDown}>
        <Countdown date={Date.now() + 4147200000} renderer={renderer}/>      
    </div>
  )
}
export default Timer;