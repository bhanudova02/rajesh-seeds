import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AboutUs } from './components/home/AboutUs'
import { GlobalPresence } from './components/home/GlobalPresence'
import { OurJourney } from './components/home/OurJourney'
import { PrestigiousClients } from './components/home/PrestigiousClients'
import { WhatWeOffer } from './components/home/WhatWeOffer'
import { Slider } from './components/Slider'
import { VMVHero } from './components/about-us/VMVHero'
import { VMV } from './components/about-us/VMV'
import { GlobalPresenceHero } from './components/about-us/GlobalPresenceHero'
import { GlobalPresenceSection } from './components/about-us/GlobalPresenceSection'
import { OurClientsHero } from './components/about-us/OurClientsHero'
import { OurPrestigiousClients } from './components/about-us/OurPrestigiousClients'
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
          <Route path="vmv" element={<div>
            <VMVHero />
            <VMV />
          </div>} />

          <Route path="gblpresence" element={<div>
            <GlobalPresenceHero />
            <GlobalPresenceSection />
          </div>} />


          <Route path="ourclients" element={
            <div>
              <OurClientsHero />
              <OurPrestigiousClients/>
            </div>
          } />




        </Routes>

      </main>
    )
  }

export default App
