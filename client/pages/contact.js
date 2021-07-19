import dynamic from 'next/dynamic'
import Head from 'next/head'
const ResponsiveNavbar = dynamic(() => import('../src/components/Navbar/ResponsiveNavbar'), {ssr: true,})
const ContactForm = dynamic(() => import('../src/components/ContactForm/ContactForm'), {ssr: true,})
const Footer = dynamic(() => import('../src/components/Footer/Footer'), {ssr: true,})

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="shortcut icon" href="/assets/images/vercel.svg" />
      </Head>
      <ResponsiveNavbar/>
      <ContactForm/>
      <Footer setmargintop='0px'/>
    </>
  )
}