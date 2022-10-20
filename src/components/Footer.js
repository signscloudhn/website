import { Link } from "react-scroll"
import logo from "@img/logo-blanco.png"
import "@styles/components/Footer.scss"
import InstagramLogo from "./common/InstagramLogo"
import TwitterLogo from "./common/TwitterLogo"
import LinkedInLogo
  from "./common/LinkedInLogo"

const Footer = ({ setShowText }) => {
  const openAbout = () => {
    setShowText(true)
  }

  return (
    <footer>
      <img src={logo}></img>
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
            <Link to="plazas" spy={true} smooth={true} duration={500}>
              Plazas Disponibles
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div className="social">
        <a href="https://www.instagram.com/signscloudhn">
          <InstagramLogo fill="#dae2e7" />
        </a>
        <a href="https://www.linkedin.com/company/signscloud-hn/">
          <LinkedInLogo
            fill="#dae2e7" fill2="#364954" />
        </a>
        <a href="https://www.twitter.com/signscloudhn">
          <TwitterLogo fill="#dae2e7" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
