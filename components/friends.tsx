import { FunctionComponent } from 'react';
import Person from './person';

import styles from './friends.module.scss';

export type Friend = {
  name: string
  description: string
  picture: string
}

type Props = {
  friends: Friend[]
}

const Friends: FunctionComponent<Props> = ({ friends }) => (
  <div className={styles.wrapper}>
    <h2>Friends</h2>
    {
      friends.map((friend) => <Person key={friend.name} {...friend} />)
    }
  </div>
);

export default Friends;