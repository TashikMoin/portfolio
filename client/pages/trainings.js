import dynamic from 'next/dynamic'
import Head from 'next/head'
const ResponsiveNavbar = dynamic(() => import('../src/components/Navbar/ResponsiveNavbar'))
const Footer = dynamic(() => import('../src/components/Footer/Footer'))

export default function trainings() {
  return (
    <>
      <Head>
        <title>Trainings</title>
        <link rel="shortcut icon" href="/assets/images/vercel.svg" />
      </Head>
      <ResponsiveNavbar/>
      <Footer/>
    </>
  )
}