import logo from "@img/logo-blanco.png"
import "@styles/components/Footer.scss"
import InstagramLogo from "./common/InstagramLogo"
import TwitterLogo from "./common/TwitterLogo"

const Footer = ({ setShowText }) => {

  const openAbout = () => { setShowText(true) }

  return (
    <footer>
      <img src={logo} ></img>
      <nav>
        <ul>
          <li><a href='/#about' onClick={openAbout} >Sobre SignsCloud</a></li>
          <li><a href='/#plazas' >Plazas Disponibles</a></li>
          <li><a href='/#contact' >Contacto</a></li>
        </ul>
      </nav>
      <div className='social' >
        <a href="https://www.instagram.com/signscloudhn" >
          <InstagramLogo fill="#dae2e7" />
        </a>
        <a href="https://www.instagram.com/signscloudhn" >
          <TwitterLogo fill="#dae2e7" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;