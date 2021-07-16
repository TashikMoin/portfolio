import ResponsiveNavbar from '../src/components/Navbar/ResponsiveNavbar'
import Hero from '../src/components/Hero/Hero'
import About from '../src/components/About/About'
import Timeline from '../src/components/Timeline/Timeline'

export default function Home() {
  return (
    <>
      <ResponsiveNavbar/>
      <Hero/>
      <About/>
      <Timeline/>
    </>
  )
}
