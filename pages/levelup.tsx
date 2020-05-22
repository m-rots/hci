import { NextPage } from 'next';
import Title from 'components/title';
import Page from 'components/page';
import Subtitle from 'components/subtitle';
import Level from 'components/level';

import styles from './progress.module.scss'

const newLevel = {
  name: 'Mad pushups',
  done: false,
};

const page: NextPage = () => {
  return (
    <>
      <Page title="Progress">
        <Title>Level up</Title>
        <Subtitle>You earned 250 coins</Subtitle>
        <div className={styles.levels}>
          <Level {...newLevel} number={4} />
        </div>
        <h3 className={styles.currentLevel}>unlocked level</h3>
        <h2 className={styles.fancyTitle}>Mad pushups</h2>
        <p className={styles.paragraph}>
        This level is all about pushups!
        </p>
        <p className={styles.paragraph}>
        As soon as you start the next exercise, you will
        be greeted with a mad level of pushups.
        Can you survive the madness?
        </p>
        <p className={styles.extraPadding}>
        No bonus this time, but the next level will have
        a very generous bonus in return!
        </p>
      </Page>
    </>
  )
}

export default page;