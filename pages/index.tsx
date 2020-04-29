import { NextPage } from 'next';
import Page from '../components/page';
import Title from '../components/title';
import Duration from '../components/duration';
import Transport from '../components/transport';

import styles from './workout.module.scss';

const page: NextPage = () => {

  return (
    <>
      <Page>
        <Title>Your workout</Title>
        <Transport />
        <Duration />
        <button className={styles.button}>Start</button>
      </Page>
    </>
  )
}

export default page;