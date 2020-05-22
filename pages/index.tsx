import { NextPage } from 'next';
import Page from 'components/page';
import Title from 'components/title';
import Duration from 'components/duration';
import Transport from 'components/transport';

import styles from './workout.module.scss';
import Link from 'next/link';

const page: NextPage = () => {

  return (
    <>
      <Page title="Workout">
        <Title>Your workout</Title>
        <Transport />
        <Duration />
        <Link href="/levelup">
          <button className={styles.button}>Start</button>
        </Link>
      </Page>
    </>
  )
}

export default page;