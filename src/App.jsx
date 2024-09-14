import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AboutUs } from './components/home/AboutUs'
import { GlobalPresence } from './components/home/GlobalPresence'
import { OurJourney } from './components/home/OurJourney'
import { PrestigiousClients } from './components/home/PrestigiousClients'
import { WhatWeOffer } from './components/home/WhatWeOffer'
import { Slider } from './components/Slider'
import { VMV } from './components/about-us/VMV'
import { GlobalPresenceSection } from './components/about-us/GlobalPresenceSection'
import { OurPrestigiousClients } from './components/about-us/OurPrestigiousClients'
import { PrestigiousClientsTestimonial } from './components/about-us/PrestigiousClientsTestimonial'
import { HeroComponent } from './components/HeroComponent'
import { DealWith } from './components/seed-processing/DealWith'
import { WorldClassFacilities } from './components/seed-processing/WorldClassFacilities'
import { WhyChooseUs } from './components/seed-processing/WhyChooseUs'
function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={
          <div>
            <Slider />
            <AboutUs />
            <WhatWeOffer />
            <GlobalPresence />
            <PrestigiousClients />
            <OurJourney />
          </div>}
        />
        <Route path="vmv" element={
          <div>
            <HeroComponent img={'/vmvbanner.jpg'} title={""} />
            <VMV />
          </div>}
        />
        <Route path="gblpresence" element={
          <div>
            <HeroComponent img={'/GlobalPresence_Hero.jpg'} title={""} />
            <GlobalPresenceSection />
          </div>}
        />

        <Route path="ourclients" element={
          <div>
            <HeroComponent img={'/our_clients_hero.jpg'} title={""} />
            <OurPrestigiousClients />
            <PrestigiousClientsTestimonial />
          </div>}
        />

        <Route path="seed-processing" element={
          <div>
            <HeroComponent img={'/seed_processing_banner.png'} title={"Welcome To Seed Processing"} />
            <DealWith />
            <WorldClassFacilities />
            <WhyChooseUs />
          </div>}
        />
        <Route path="seed-to-seed" element={
          <div>
            <HeroComponent img={'/seed_to_seed_banner.jpg'} title={"Welcome To Seed To Seed"} />
          </div>
        }
        />

      </Routes>
    </main>
  )
}

export default App
