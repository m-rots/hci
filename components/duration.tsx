import { FunctionComponent, useState } from 'react';
import styles from './duration.module.scss';

const WorkoutDuration: FunctionComponent = () => {
  const [duration, setDuration] = useState(30);
  
  return (
    <div className={styles.wrapper}>
      <span className={styles.time}>{duration} minutes</span>
      <input
        className={styles.range}
        type="range"
        min={15} max={120} step={15}
        onChange={(event) => setDuration(parseInt(event.target.value, 10))}
        value={duration}
      />
    </div>
  );
}

export default WorkoutDuration;
