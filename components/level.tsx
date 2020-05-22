import { FunctionComponent } from 'react';
import styles from './level.module.scss';

type LevelInput = {
  name: string
  number: number
  bonusCoins?: number
  done?: boolean
  onClick?: () => void
}

const Level: FunctionComponent<LevelInput> = ({ name, number, bonusCoins, done, onClick }) => {
  let classes = styles.level  
  if (done) {
    classes += ' ' + styles.done
  }
  if (onClick) {
    classes += ' ' + styles.clickable
  }

  return (
    <div className={classes} onClick={() => onClick && onClick()}>
      <span className={styles.number}>{number}</span>
      <span className={styles.name}>{name}</span>
      {
        bonusCoins && (
          <div className={styles.coins}>
            <span className={styles.amount}>{bonusCoins}</span>
            <span className={styles.bonus}>bonus coins</span>
          </div>
        )
      }
    </div>
  );
}

export default Level;
