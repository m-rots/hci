import Head from 'next/head';
import { FunctionComponent } from 'react';
import styles from './page.module.scss';

type Props = {
  scrollable?: boolean
}

const Page: FunctionComponent<Props> = ({ children, scrollable }) => {
  let classes = styles.page;
  if (scrollable) {
    classes += ' ' + styles.scrollable;
  }

  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Ganzensport" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7341E7"/>
      </Head>
      <div className={classes}>
        {children}
      </div>
    </>
  )
}

export default Page;