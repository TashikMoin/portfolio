import dynamic from 'next/dynamic'
import Head from 'next/head'
const ResponsiveNavbar = dynamic(() => import('../src/components/Navbar/ResponsiveNavbar'), {ssr: true,})
const About = dynamic(() => import('../src/components/About/About'), {ssr: true,})
const Footer = dynamic(() => import('../src/components/Footer/Footer'), {ssr: true,})

export default function about() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="shortcut icon" href="/assets/images/vercel.svg" />
      </Head>
      <ResponsiveNavbar/>
      <About/>
      <Footer setmargintop='0px'/>
    </>
  )
}
