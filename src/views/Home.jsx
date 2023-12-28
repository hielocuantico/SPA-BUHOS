import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Services from '../components/Services/Services'
import BannerTournament from '../components/BannerTournament/BannerTournament'
import About from '../components/About/About'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <BannerTournament/>
      <About/>
      <Services/>
    </div>
  )
}

export default Home