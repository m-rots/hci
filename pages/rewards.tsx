import { NextPage } from 'next';
import Title from '../components/title';
import Page from '../components/page';
import Subtitle from '../components/subtitle';

const page: NextPage = () => {

  return (
    <>
      <Page title="Rewards">
        <Title>Rewards</Title>
        <Subtitle>32 coins</Subtitle>
      </Page>
    </>
  )
}

export default page;