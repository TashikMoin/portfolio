import dynamic from 'next/dynamic'
import Head from 'next/head'
const ResponsiveNavbar = dynamic(() => import('../src/components/Navbar/ResponsiveNavbar'), {ssr: true})
const Experience = dynamic(() => import('../src/components/Experience/Experience'), {ssr: true})
const Education = dynamic(() => import('../src/components/Education/Education'), {ssr: true})
const Interests = dynamic(() => import('../src/components/Interests/Interests'), {ssr: true})
const Skills = dynamic(() => import('../src/components/Skills/Skills'), {ssr: true})
const CertificationsAndGrades = dynamic(()=> import('../src/components/CertificationsAndGrades/CertificationsAndGrades'), {ssr: true})
const Achievements = dynamic(() => import('../src/components/Achievements/Achievements'), {ssr: true})
const Footer = dynamic(() => import('../src/components/Footer/Footer'), {ssr: true})

export default function portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="shortcut icon" href="/assets/images/vercel.svg" />
      </Head>
      <ResponsiveNavbar/>
      <Experience/>
      <Education/>
      <Interests/>
      <Skills/>
      <CertificationsAndGrades/>
      <Achievements/>
      <Footer/>
    </>
  )
}
