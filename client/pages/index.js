import Head from 'next/head';
import ResponsiveNavbar from '../src/components/Navbar/ResponsiveNavbar'
import Hero from '../src/components/Hero/Hero'
import Timeline from '../src/components/Timeline/Timeline'
import Hobbies from '../src/components/Hobbies/Hobbies'
import Comments from '../src/components/Comments/Comments'
import Footer from '../src/components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/assets/images/vercel.svg" />
      </Head>
      <ResponsiveNavbar/>
      <Hero/>
      <Timeline/>
      <Hobbies/>
      <Comments/>
      <Footer/>
    </div>
  )
}
