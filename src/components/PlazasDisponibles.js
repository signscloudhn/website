import { Link } from "react-scroll"
import { plazas } from "../data/plazas"
import Location from "./common/Location"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

import circularss from "@img/circularss_2.png"
import "@styles/components/PlazasDisponibles.scss"

const PlazasDisponibles = () => {
  const cardsContainer = useRef(null)
  const imgRef = useRef(null)

  const observer = new IntersectionObserver(
    (e) => {
      e.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            translateX: 0,
            opacity: 1,
            transform: "scale(1)",
            delay: 0.5,
            ease: "back.out(1.7)",
          })
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0,
      rootMargin: "50px",
    }
  )


  useEffect(() => {
    const childrens = cardsContainer.current?.childNodes

    for (let index = 0; index < childrens.length; index++) {
      const element = childrens[index]
      observer.observe(element)
    }
    observer.observe(imgRef.current)

  }, [])

  return (
    <section className="plazas" id="plazas">
      <h2>Únete a nuestro equipo</h2>

      <div className="plazas__intro">
        <div className="plazas__intro--img" >
          <img src={circularss} ref={imgRef} />
        </div>
        <p className="plazas__intro--marging-text" >Únete a Nuestro Equipo Creativo: Si Eres Joven, Creativo y Apasionado por el Diseño y la Tecnología, Tenemos un Lugar para Ti.
        </p>
      </div>


      <h3>Plazas Disponibles</h3>
      <div className="plazas__cards-container" ref={cardsContainer} >
        {plazas.map((p) => {
          return (
            <article className="plaza-card" key={p.puesto}>
              <div>
                <h4>{p.puesto}</h4>
                <p>- Tecnologias que utilizamos:</p>
                <div className="tecnologias">
                  {p.tecnologias.map((t) => (
                    <p
                      key={t + Math.random()}
                    >- {t}</p>
                  ))}
                </div>
                <p>
                  <Location /> {p.lugar}
                </p>
              </div>
              <Link to="contact" spy={true} smooth={true} duration={500}>
                Aplicar
              </Link>
            </article>
          )
        })}
      </div>
    </section >
  )
}

export default PlazasDisponibles
