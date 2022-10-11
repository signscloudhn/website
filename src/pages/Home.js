import React from "react"
import Contacto from "../components/Contacto"
import Header from "../components/Header"
import LogoAndAbout from "../components/LogoAndAbout"
import PlazasDisponibles from "../components/PlazasDisponibles"

const Home = () => {
  return (
    <>
      <Header />
      <LogoAndAbout />
      <PlazasDisponibles />
      <Contacto />
    </>
  )
}

export default Home
