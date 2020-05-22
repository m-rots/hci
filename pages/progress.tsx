import { NextPage } from 'next';
import Title from 'components/title';
import Page from 'components/page';
import Subtitle from 'components/subtitle';
import Level from 'components/level';

import styles from './progress.module.scss'

const page: NextPage = () => {
  const today = new Date();
  const month = today.toLocaleString('en', { month: 'long' });

  return (
    <>
      <Page title="Progress">
        <Title>{month}</Title>
        <Subtitle>3 of 30 levels<br />completed</Subtitle>
        <div className={styles.levels}>
          <Level name="Doomed leg day" number={1} done />
          <Level name="Sky high burpees" number={2} bonusCoins={50} done />
          <Level name="Double trouble" number={3} done />
          <Level name="Squad druple" number={4} bonusCoins={200} />
          <Level name="mad pushups" number={5} />
          <Level name="100km sprint" number={6} bonusCoins={500} />
          <Level name="cinema ticket" number={7}/>
        </div>
      </Page>
    </>
  )
}

export default page;