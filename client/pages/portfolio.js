import ResponsiveNavbar from '../src/components/Navbar/ResponsiveNavbar'
import Experience from '../src/components/Experience/Experience'
import Interests from '../src/components/Interests/Interests'
import Skills from '../src/components/Skills/Skills'
import Footer from '../src/components/Footer/Footer'

export default function portfolio() {
  return (
    <>
      <ResponsiveNavbar/>
      <Experience/>
      <Interests/>
      <Skills/>
      <Footer/>
    </>
  )
}
