import "@styles/components/Info.scss"
import employee from "@img/signscloud_employee.png"
import circularss from "@img/circulares_1.png"
import genericos from "@img/genericos.png"
import flyers from "@img/flyers.png"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export const InfoAndPictures = () => {
  const imgContainer = useRef(null)
  const imgContainer2 = useRef(null)

  const observer = new IntersectionObserver((e) => {
    e.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          transform: "scale(1)",
          opacity: 1,
          delay: 0.5,
          ease: "back.out(1.7)"
        })
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0,
    rootMargin: "50px",
  })

  useEffect(() => {
    const childrens = imgContainer.current?.childNodes
    const childrens2 = imgContainer2.current?.childNodes

    for (let index = 0; index < childrens.length; index++) {
      const element = childrens[index]
      observer.observe(element)
    }

    for (let index = 0; index < childrens2.length; index++) {
      const element = childrens2[index]
      observer.observe(element)
    }

  }, [])

  return (
    <section className="info" id="about" >
      <div className="info__text">
        <p className="info__text--marging-text" >¡Innovación que impulsa tu éxito! En Signscloud hacemos que las empresas sean lo mejor que pueden ser proporcionando soluciones a medida para sus desafíos.
        </p>
        <p>
          Lo que transmitimos es una plena confianza en cada colaborador de los proyectos que desarrollamos. Creemos en hacer
          las cosas con pasión y confiamos en nuestros procesos.
        </p>
      </div>
      <div className="info__img" ref={imgContainer} >
        <img src={employee} />
        <img src={circularss} />
      </div>

      <div className="info__img second-image" ref={imgContainer2} >
        <img src={genericos} />
        <img src={flyers} className="bottom" />
      </div>

      <div className="info__text">
        <p className="info__text--marging-text" >
          Somos una empresa empresa dedicada a brindar soluciones para producciones digitales. Nuestro equipo trata no sólo de satisfacer tus expectativas, sino de superarlas.
        </p>
        <p>
          ¡Explora el potencial con SignsCloudHN y déjanos convertir tus visiones en realidad!
        </p>
      </div>
    </section>
  )
}