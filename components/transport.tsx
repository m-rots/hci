import { FunctionComponent, useState } from 'react';
import styles from './transport.module.scss';

const Transport: FunctionComponent = () => {
  const [selected, setSelected] = useState(0);

  const getClass = (id: number) => {
    if (selected === 0) {
      return styles.button;
    }

    if (selected === id) {
      return [styles.button, styles.selected].join(' ');
    }

    return [styles.button, styles.unselected].join(' ');
  }

  return (
    <div className={styles.wrapper}>
      <button className={getClass(1)} onClick={() => setSelected(1)}>
        <span>run</span>
      </button>
      <button className={getClass(2)} onClick={() => setSelected(2)}>
        <span>cycle</span>
      </button>
    </div>
  )
}

export default Transport;