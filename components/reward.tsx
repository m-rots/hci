import { FunctionComponent } from 'react';
import styles from './reward.module.scss';

type Props = {
  company: string
  product: string
  coins: number
  onClick?: () => void
}

const Reward: FunctionComponent<Props> = ({ company, product, coins, onClick }) => {
  return (
    <div className={styles.reward} onClick={() => onClick && onClick()}>
      <span className={styles.company}>{company}</span>
      <span className={styles.product}>{product}</span>
      <span className={styles.amount}>
        {coins}
        <span className={styles.coins}> coins</span>
      </span>
    </div>
  );
}

export default Reward;
