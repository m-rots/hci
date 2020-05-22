import { NextPage } from 'next';
import Title from 'components/title';
import Page from 'components/page';
import Subtitle from 'components/subtitle';
import Level from 'components/level';

import styles from './progress.module.scss'
import { useState } from 'react';

const currentLevel = 3

const levels = [
  {
    name: 'Doomed leg day',
    done: true,
  },
  {
    name: 'Sky high burpees',
    done: true,
    bonusCoins: 50,
  },
  {
    name: 'Double trouble',
    done: true,
  },
  {
    name: 'Squad druple',
    done: false,
    bonusCoins: 200,
  },
  {
    name: 'Mad pushups',
    done: false,
  },
  {
    name: '100km sprint',
    done: false,
    bonusCoins: 500,
  },
  {
    name: 'Cinema ticket',
    done: false,
  },
]

const page: NextPage = () => {
  const today = new Date();
  const month = today.toLocaleString('en', { month: 'long' });

  const [index, setIndex] = useState(currentLevel)

  function previous() {
    setIndex(index - 1)
  }

  function next() {
    setIndex(index + 1)
  }

  return (
    <>
      <Page title="Progress">
        <Title>{month}</Title>
        <Subtitle>3 of {levels.length} levels<br />completed</Subtitle>
        <div className={styles.levels}>
          <Level {...levels[index - 1]} number={index} onClick={index > 0 && previous} />
          <Level {...levels[index]} number={index + 1} />
          <Level {...levels[index + 1]} number={index + 2} onClick={index < levels.length-1 && next} />
        </div>
        <h3 className={styles.currentLevel}>current level</h3>
        <h2 className={styles.fancyTitle}>Squaddruple</h2>
        <p className={styles.paragraph}>
          This level is all about squads!
        </p>
        <p className={styles.paragraph}>
        As soon as you start the next exercise, you will
        be greeted with four times the number of squad-
        related exercises.
        </p>
        <p className={styles.extraPadding}>
        As a bonus, you can earn an extra 200 coins to
        spend on this month’s limited rewards in the shop!
        </p>
      </Page>
    </>
  )
}

export default page;