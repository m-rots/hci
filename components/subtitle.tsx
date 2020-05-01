import { FunctionComponent } from 'react';
import styles from './subtitle.module.scss';

const Subtitle: FunctionComponent = ({ children }) => {
  return <span className={styles.subtitle}>{children}</span>
}

export default Subtitle;
