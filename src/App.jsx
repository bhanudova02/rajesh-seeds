import './App.css'
import Header from './components/Header'
import { AboutUs } from './components/home/AboutUs'
import { GlobalPresence } from './components/home/GlobalPresence'
import { OurJourney } from './components/home/OurJourney'
import { PrestigiousClients } from './components/home/PrestigiousClients'
import { WhatWeOffer } from './components/home/WhatWeOffer'
import { Slider } from './components/Slider'
import { Carousel_Home_Data } from './lib/data'

function App() {

  return (
    <main>
      <Header/>
      <Slider sliderList={Carousel_Home_Data} />
      <AboutUs/>
      <WhatWeOffer/>
      <GlobalPresence/>
      <PrestigiousClients/>
      <OurJourney/>
    </main>
  )
}

export default App
