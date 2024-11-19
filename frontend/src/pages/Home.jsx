
import TestimonialWidget from '../components/common/TestimonialWidget'
import HeroSection  from '../components/specificComponent/HeroSection'
import PriceSection  from '../components/specificComponent/PriceSection'
import Services  from '../components/specificComponent/Services'

function Home() {
  return (
    <div>
        <HeroSection/>
        <Services/>

        <TestimonialWidget rtl={true}/>
        <TestimonialWidget rtl={false}/>
        <PriceSection/>
    </div>
  )
}

export default Home
