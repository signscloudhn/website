import Formulario from "./Formulario"
import "@styles/components/Contacto.scss"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Contacto = () => {
  const elementRef = useRef()

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          gsap.to(e.target, { opacity: 1, delay: 0.5, ease: "back.out(1.7)" })
          observer.unobserve(e.target)
        }
      })
    },
    { threshold: 0.25 }
  )

  useEffect(() => {
    observer.observe(elementRef.current)
  }, [])

  return (
    <section className="contacto" id="contact" ref={elementRef} >
      <a name="contact"></a>
      <h2>Contacto</h2>
      <Formulario />
    </section>
  )
}

export default Contacto
