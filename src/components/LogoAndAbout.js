import { Link } from "react-scroll"
import "@styles/components/LogoAndAbout.scss"
import LogoSVG from "./common/LogoSVG"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const LogoAndAbout = ({ showText, setShowText }) => {

  const handleText = () => {
    setShowText(!showText)
  }

  const container = useRef()

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".logo", { translateY: 0, delay: 0.5, ease: "back.out(1.7)" })
    }, container)
    // console.log(container.current.children[0].classList)
    return () => ctx.revert()
  }, [])

  return (
    <section className="logo-n-about" ref={container}>
      <div className="logo-n-about__filter">
        <div className="logo">
          <LogoSVG />
        </div>

        <div className="logo-n-about__text" id="about">
          {showText && (
            <p>
              Somos una empresa de soluciones para producciones digitales.
              Nuestra historia comienza con 2 soñadores que se convierten en
              visionarios con el deseo de alcanzar más. Creativos que creían en
              lograr soluciones digitales impresionantes. <br /> Ellos se
              convirtieron en precursores de este proyecto, cimentando y creando
              las bases de lo que somos hoy. En momentos llegaron a solo dormir
              3 horas al día para alcanzar lo que empezó como un sueño. Nos
              sentimos orgullosos de la excelencia en servicio y calidad que
              brindamos.
              <br />
              <br />
              Esto es posible gracias a las personas con las que decidimos
              trabajar y nuestra filosofía de trabajo. Creemos en hacer las
              cosas con pasión y confiamos en nuestros procesos. Uno de nuestros
              procesos que más nos enorgullece es la selección del personal
              ideal. En el inicio en Honduras fue con 7 personas. Actualmente
              contamos con mas de 35 personas. Este éxito es parte de lo que nos
              a traído al lugar donde estamos el día de hoy.
              <br />
              <br />
              Lo que se transmite en la plena confianza en las personas
              encargadas e involucradas en cada proyecto. Estamos ansiosos por
              proyectos de todo tamaño y nivel de complejidad. Nuestra empresa
              enfoca su cultura en reconocer a las personas con una gran
              cantidad de creatividad natural y desarrollarlas a su máximo
              nivel.
            </p>
          )}
        </div>
      </div>
      <div className="logo-n-about__btn">
        <Link
          to={!showText ? "about" : "header"}
          spy={true}
          smooth={true}
          duration={500}
        >
          <button onClick={handleText}>
            {!showText ? "Sobre Nosotros" : "Cerrar"}
          </button>
        </Link>
      </div>
    </section>
  )
}

export default LogoAndAbout
