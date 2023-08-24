import React from "react"
import { useState } from "react"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import Header from "../components/Header"
import LogoAndAbout from "../components/LogoAndAbout"
import PlazasDisponibles from "../components/PlazasDisponibles"
import { InfoAndPictures } from "../components/InfoAndPictures"
import Corporations from "../components/Corporations"

const Home = () => {
  return (
    <>
      <Header />
      <LogoAndAbout />
      <InfoAndPictures />
      <Corporations />
      <PlazasDisponibles />
      <Contacto />
      <Footer />
    </>
  )
}

export default Home
