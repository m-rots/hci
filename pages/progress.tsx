import { NextPage } from 'next';
import Title from '../components/title';
import Page from '../components/page';
import Subtitle from '../components/subtitle';

const page: NextPage = () => {

  return (
    <>
      <Page title="Progress">
        <Title>April</Title>
        <Subtitle>10 rewards left</Subtitle>
      </Page>
    </>
  )
}

export default page;