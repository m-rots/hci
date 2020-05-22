import { NextPage } from 'next';
import Title from 'components/title';
import Page from 'components/page';

const page: NextPage = () => {

  return (
    <>
      <Page title="404">
        <Title>404</Title>
      </Page>
    </>
  )
}

export default page;