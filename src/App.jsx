import { Route, Routes, useLocation } from 'react-router-dom'
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
import { ChemicalComponent } from './components/agro-chemical/ChemicalComponent'
import { Infrastructure } from './components/infra/Infrastructure'
import { InfrastructureStatus } from './components/infra/InfrastructureStatus'
import InfrastructureTab from './components/infra/InfrastructureTab'
import { CareerComponent } from './components/career/CareerComponent'
import { ContactUs } from './components/contact-us/ContactUs'
import { PrivacyPolicy } from './components/privacy-policy/PrivacyPolicy'
import { useEffect, useState } from 'react'
import { LoadingPopup } from './components/LoadingPopup'
function App() {
  const [loading, setLoading] = useState(true); // Initial load
  const location = useLocation();

  useEffect(() => {
    // Set loading to false after the initial load
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Do nothing on route change after the initial load
    setLoading(false);
  }, [location]);
  return (
    <main>
      {loading ? <LoadingPopup /> : <div>
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

          <Route path="rspl-feed" element={
            <div>
              <HeroComponent img={'/AnimalFeedBanner.jpg'} title={"Welcome To RSPL Feeds"} />
              <FeedWhoWeAre />
              <FeedOurStrengths />
              <FeedWhyChooseUs />
            </div>
          }
          />

          <Route path="agro-chemicals" element={
            <div>
              <HeroComponent img={'/AgroChemicalBanner.jpg'} title={"Welcome To Agro Chemical"} />
              <ChemicalComponent />
            </div>
          } />

          <Route path="infra" element={
            <div>
              <HeroComponent img={'/InfrastructureBanner.jpg'} title={"Welcome To Infrastructure"} />
              <Infrastructure />
              <InfrastructureTab />
              <InfrastructureStatus />
            </div>
          } />
          <Route path="career" element={
            <div>
              <HeroComponent img={'/Carrer.jpg'} title={"Career Growth With RSPL"} />
              <CareerComponent />
            </div>
          } />
          <Route path="contact-us" element={
            <div>
              <HeroComponent img={'/ContactUsBanner.jpg'} title={"Feel Free To ContactUs"} />
              <ContactUs />
            </div>
          } />
          <Route path="privacypolicy" element={
            <div>
              <HeroComponent img={'/Bannerprivacypolicy.jpg'} title={"Our Company Privacy & Policy"} />
              <PrivacyPolicy />
            </div>
          } />
        </Routes>
      </div>}

    </main>
  )
}

export default App
