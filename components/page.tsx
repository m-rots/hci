import Head from 'next/head';
import { FunctionComponent } from 'react';
import styles from './page.module.scss';

type Props = {
  title: string
}

const Page: FunctionComponent<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`${title} - Ganzensport`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Ganzensport" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7341E7"/>
      </Head>
      <div className={styles.page}>
        {children}
      </div>
    </>
  )
}

export default Page;