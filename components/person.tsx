import { FunctionComponent } from 'react';
import styles from './person.module.scss';

type Props = {
  name: string
  description: string
  picture: string
}

const Person: FunctionComponent<Props> = ({ name, description, picture }) => (
  <div className={styles.wrapper}>
    <img className={styles.image} src={picture} />
    <div className={styles.text}>
      <span className={styles.name}>{name}</span>
      <span className={styles.description}>{description}</span>
    </div>
  </div>
);

export default Person;