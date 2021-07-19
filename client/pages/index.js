import Head from 'next/head';
import dynamic from 'next/dynamic'

const ResponsiveNavbar = dynamic(() => import('../src/components/Navbar/ResponsiveNavbar'), {ssr: true,})
const Hero = dynamic(() => import('../src/components/Hero/Hero'), {ssr: true,})
const Timeline = dynamic(() => import('../src/components/Timeline/Timeline'), {ssr: true,})
const Hobbies = dynamic(() => import('../src/components/Hobbies/Hobbies'), {ssr: true,})
const Comments = dynamic(() => import('../src/components/Comments/Comments'), {ssr: true,})
const Footer = dynamic(() => import('../src/components/Footer/Footer'), {ssr: true,})


export default function Home() {
  return (
    <div>
      <Head>
        <title>TashikMoin</title>
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
