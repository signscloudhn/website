import { useMobile } from "../hooks/useMobile"
import { useState } from "react"
import isotipo from "@img/isotipo.png"
import InstagramLogo from "./common/InstagramLogo"
import TwitterLogo from "./common/TwitterLogo"
import MenuSVG from "./common/MenuSVG"
import EquisSVG from "./common/EquisSVG"
import "@styles/components/Header.scss"

const Header = ({ setShowText }) => {
  // Estado para Abrir y cerrar menu
  const [open, setOpen] = useState(false)
  // Estado para el scroll Y
  const [scroll, setScroll] = useState(0)

  const isMobile = useMobile(870)

  window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop
    setScroll(scrollTop)
  })

  const toggleOpen = () => {
    setOpen(!open)
  }

  const openToFalse = () => {
    setOpen(false)
  }

  const openAbout = () => {
    setShowText(true)
    setOpen(false)
  }

  return (
    <header>
      <div
        className={`header-content ${!open ? "header-content-hided" : "header-content-vertical"
          }`}
      >
        <a
          href="/#about"
          onClick={() => {
            setShowText(true)
            setOpen(false)
          }}
        >
          <img src={isotipo} alt="SignsCloud logo" />
        </a>
        <nav>
          <ul>
            <li>
              <a
                href="/#about"
                onClick={openAbout}
              >
                Sobre SignsCloud
              </a>
            </li>
            <li>
              <a
                href="/#plazas"
                onClick={openToFalse}
              >
                Plazas Disponibles
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                onClick={() => {
                  setOpen(false)
                }}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        {!isMobile && (
          <div className="social">
            <a href="https://www.instagram.com/signscloudhn">
              <InstagramLogo fill="#364954" />
            </a>
            <a>
              <TwitterLogo fill="#364954" />
            </a>
          </div>
        )}
        {isMobile && (
          <div className="burger-btn" onClick={toggleOpen}>
            {!open ? (
              <MenuSVG scroll={scroll} />
            ) : (
              <EquisSVG />
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
