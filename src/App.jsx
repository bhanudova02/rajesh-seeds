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
import { SeedToSeed } from './components/seed-to-seed/SeedToSeed'
import CompanyServices from './components/seed-to-seed/CompanyServices'
import CommitmentQuality from './components/seed-to-seed/CommitmentQuality'
import VegetableListingComponent from './components/food-processing/VegetableListingComponent'
import { FoodInfrastructure } from './components/food-processing/FoodInfrastructure'
import { FoodWhatWeOffer } from './components/food-processing/FoodWhatWeOffer'
import { FoodWhyChooseUs } from './components/food-processing/FoodWhyChooseUs'
import { OurFoodStrengths } from './components/food-processing/OurFoodStrengths'
import { FoodCertifications } from './components/food-processing/FoodCertifications'
import { FeedWhoWeAre } from './components/animal-feeds/FeedWhoWeAre'
import { FeedOurStrengths } from './components/animal-feeds/FeedOurStrengths'
import { FeedWhyChooseUs } from './components/animal-feeds/FeedWhyChooseUs'
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
            <SeedToSeed />
            <CompanyServices />
            <CommitmentQuality />
          </div>
        }
        />

        <Route path="food-processing" element={
          <div>
            <HeroComponent img={'/FoodProcessingBanner.png'} title={"Welcome To Food Processing"} />
            <VegetableListingComponent />
            <FoodInfrastructure />
            <FoodWhatWeOffer />
            <FoodWhyChooseUs />
            <OurFoodStrengths />
            <FoodCertifications />
          </div>
        }
        />

        <Route path="pspl-feed" element={
          <div>
            <HeroComponent img={'/AnimalFeedBanner.jpg'} title={"Welcome To PSPL Feeds"} />
            <FeedWhoWeAre />
            <FeedOurStrengths/>
            <FeedWhyChooseUs/>
          </div>
        }
        />

      </Routes>
    </main>
  )
}

export default App
