import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import HeroSection  from '../components/specificComponent/HeroSection'
import PriceSection  from '../components/specificComponent/PriceSection'
import Services  from '../components/specificComponent/Services'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Services/>
        <PriceSection/>
        <Footer/>
    </div>
  )
}

export default Home
