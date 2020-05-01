import { FunctionComponent } from 'react';
import styles from './person.module.scss';

type Props = {
  name: string
  position: number
  points: number
  picture: string
}

const withSuffix = (position: number) => {
  const j = position % 10;
  const k = position % 100;

  if (j == 1 && k != 11) {
    return `${position}st`;
  }

  if (j == 2 && k != 12) {
    return `${position}nd`;
  }

  if (j == 3 && k != 13) {
    return `${position}rd`;
  }

  return `${position}th`;
};

const description = (position: number, points: number) => {
  return `${withSuffix(position)} - ${points} points`;
}

const Person: FunctionComponent<Props> = ({ name, points, position, picture }) => (
  <div className={styles.wrapper}>
    <img className={styles.image} src={picture} alt={`${name}'s profile picture`} />
    <div className={styles.text}>
      <span className={styles.name}>{name}</span>
      <span className={styles.description}>{description(position, points)}</span>
    </div>
  </div>
);

export default Person;