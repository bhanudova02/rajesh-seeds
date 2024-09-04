import './App.css'
import Header from './components/Header'
import { AboutUs } from './components/home/AboutUs'
import { WhatWeOffer } from './components/home/WhatWeOffer'
import { NavBarComponent } from './components/NavBarComponent'
import { Slider } from './components/Slider'
import { Carousel_Home_Data } from './lib/data'

function App() {

  return (
    <main>
      {/* <NavBarComponent/> */}
      <Header/>
      <Slider sliderList={Carousel_Home_Data} />
      <AboutUs/>
      <WhatWeOffer/>
    </main>
  )
}

export default App
