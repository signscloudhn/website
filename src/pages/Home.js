import React from "react"
import { useState } from "react"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import Header from "../components/Header"
import LogoAndAbout from "../components/LogoAndAbout"
import PlazasDisponibles from "../components/PlazasDisponibles"
import { InfoAndPictures } from "../components/InfoAndPictures"

const Home = () => {
  const [showText, setShowText] = useState(false)
  return (
    <>
      <Header setShowText={setShowText} />
      <LogoAndAbout showText={showText} setShowText={setShowText} />
      <InfoAndPictures />
      <PlazasDisponibles />
      <Contacto />
      <Footer setShowText={setShowText} />
    </>
  )
}

export default Home
