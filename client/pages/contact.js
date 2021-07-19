import ResponsiveNavbar from '../src/components/Navbar/ResponsiveNavbar'
import ContactForm from '../src/components/ContactForm/ContactForm'
import Footer from '../src/components/Footer/Footer'

export default function contact() {
  return (
    <>
      <ResponsiveNavbar/>
      <ContactForm/>
      <Footer setmargintop='0px'/>
    </>
  )
}