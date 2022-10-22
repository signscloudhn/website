import { useMobile } from "../hooks/useMobile"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-scroll"
import { gsap } from "gsap"
import isotipo from "@img/isotipo.png"
import InstagramLogo from "./common/InstagramLogo"
import TwitterLogo from "./common/TwitterLogo"
import MenuSVG from "./common/MenuSVG"
import EquisSVG from "./common/EquisSVG"
import "@styles/components/Header.scss"
import LinkedInLogo from "./common/LinkedInLogo"
import GotaSVG from "./common/GotaSVG"

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

  const logoRef = useRef(null)
  const gotasRef = useRef(null)

  const gotas = [0, 1, 2, 3, 4]

  let childs = gotasRef.current?.childNodes

  useEffect(() => {
    childs = gotasRef.current?.childNodes
  }, [])

  const animate = () => {
    for (let index = 0; index < childs.length; index++) {
      const element = childs[index]

      const indexRandom = Math.round(Math.random() * 5)
      gsap.to(element, {
        opacity: 1,
        translateY: 7,
        delay: 0.1 * indexRandom,
      })
      gsap.to(element, {
        opacity: 0,
        delay: 0.2 * indexRandom,
      })
      gsap.to(element, {
        translateY: 0,
        delay: 0.6 * indexRandom,
      })
    }
  }

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
        id="header"
        className={`header-content ${!open ? "header-content-hided" : "header-content-vertical"
          }`}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          delay={800}
          onClick={() => {
            animate()
            setShowText(true)
            setOpen(false)
          }}
        >
          <img ref={logoRef} src={isotipo} alt="SignsCloud logo"></img>
          <div ref={gotasRef}>
            {gotas.map((g) => (
              <GotaSVG
                classe="gota"
                key={g}
                style={{ left: `${33 + g * 4}px` }}
              />
            ))}
          </div>
        </Link>

        <nav>
          <ul>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onClick={openAbout}
              >
                Sobre SignsCloud
              </Link>
            </li>
            <li>
              <Link
                to="plazas"
                spy={true}
                smooth={true}
                duration={500}
                onClick={openToFalse}
              >
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
            <a href="https://www.instagram.com/signscloudhn" target="_blank">
              <InstagramLogo fill="#364954" />
            </a>
            <a
              href="https://www.linkedin.com/company/signscloud-hn/"
              target="_blank"
            >
              <LinkedInLogo fill="#364954" fill2="#dae2e7" />
            </a>
            <a href="https://www.twitter.com/signscloudhn" target="_blank">
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
