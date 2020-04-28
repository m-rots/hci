import { FunctionComponent } from 'react';
import styles from './title.module.scss';

const Title: FunctionComponent = ({ children }) => (
  <h1 className={styles.title}>{children}</h1>
)

export default Title;
