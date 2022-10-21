import { Link } from "react-scroll"
import { plazas } from "../data/plazas"
import Location from "./common/Location"
import "@styles/components/PlazasDisponibles.scss"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"

const PlazasDisponibles = () => {
  const cardsContainer = useRef()

  const observer = new IntersectionObserver(
    (e) => {
      e.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { translateX: 0, opacity: 1, delay: 0.5, ease: "back.out(1.7)" })
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
  }, [])

  return (
    <section className="plazas" id="plazas">
      <h2>Plazas Disponibles</h2>

      <div className="plazas__cards-container" ref={cardsContainer}>
        {plazas.map((p) => {
          return (
            <article className="plaza-card" key={p.puesto + Math.random()}>
              <div>
                <h4>{p.puesto}</h4>
                <p
                  className="categoria"
                  style={
                    p.categoria === "Programacion"
                      ? {
                        backgroundColor: "#73E695",
                        boxShadow: "2px 1px 5px #A1A6E6",
                      }
                      : {
                        backgroundColor: "#A1A6E6",
                        boxShadow: "2px 1px 5px #73E695",
                      }
                  }
                >
                  {p.categoria}
                </p>
                <p>- Tecnologias que utilizamos:</p>
                <div className="tecnologias">
                  {p.tecnologias.map((t) => (
                    <p key={t + Math.random()}>- {t}</p>
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
    </section>
  )
}

export default PlazasDisponibles
