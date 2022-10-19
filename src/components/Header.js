import { useMobile } from "../hooks/useMobile"
import { useState } from "react"
import { Link } from "react-scroll"
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
      <div id="header"
        className={`header-content ${!open ? "header-content-hided" : "header-content-vertical"
          }`}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          // delay={500}
          onClick={() => {
            setShowText(true)
            setOpen(false)
          }}
        >
          <img

            src={isotipo}
            alt="SignsCloud logo"
          />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="about"
                spy={true}
                smooth={true}
                duration={500} onClick={openAbout}>
                Sobre SignsCloud
              </Link>
            </li>
            <li>
              <Link to="plazas"
                spy={true}
                smooth={true}
                duration={500} onClick={openToFalse}>
                Plazas Disponibles
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => {
                  setOpen(false)
                }}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        {!isMobile && (
          <div className="social">
            <a href="https://www.instagram.com/signscloudhn">
              <InstagramLogo fill="#364954" />
            </a>
            <a href="https://www.twitter.com/signscloudhn">
              <TwitterLogo fill="#364954" />
            </a>
          </div>
        )}
        {isMobile && (
          <div className="burger-btn" onClick={toggleOpen}>
            {!open ? <MenuSVG scroll={scroll} /> : <EquisSVG />}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
