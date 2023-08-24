import "@styles/components/Corporations.scss"
import circularss from "@img/circularss.png"
import hiresprint from "@img/hiresprint.png"
import sweepstouch from "@img/sweepstouch.png"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Corporations = () => {

  const brandsContainer = useRef(null)

  const observer = new IntersectionObserver((e) => {
    e.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          translateX: 0,
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
    const childrens = brandsContainer.current?.childNodes

    for (let index = 0; index < childrens.length; index++) {
      const element = childrens[index]
      observer.observe(element)
    }

  }, [])

  return (
    <section className="corporations" id="corporations">
      <h2>Colaboradores</h2>
      <div className="corporations__logos" ref={brandsContainer} >
        <article>
          <img src={hiresprint} alt="circularss" />
          <p>hiresprint</p>
        </article>
        <article>
          <img src={circularss} alt="circularss" />
          <p>circularss</p>
        </article>
        <article>
          <img src={sweepstouch} alt="circularss" />
          <p>sweepstouch</p>
        </article>
      </div>
    </section>
  )
}

export default Corporations
