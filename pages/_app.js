import Layout from '../components/Layout'
import '../styles/globals.css' //the only place to bring in global stylesheet

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
