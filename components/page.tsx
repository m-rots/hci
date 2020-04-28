import { FunctionComponent } from 'react';
import styles from './page.module.scss';

const Page: FunctionComponent = ({ children }) => (
  <div className={styles.page}>
    {children}
  </div>
)

export default Page;