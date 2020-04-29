import '../styles.scss'

import { AppProps } from 'next/app'
import Appbar from '../components/appbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Appbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp