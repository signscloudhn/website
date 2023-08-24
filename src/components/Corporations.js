import "@styles/components/Corporations.scss"
import circularss from "@img/circularss.png"
import hiresprint from "@img/hiresprint.png"
import sweepstouch from "@img/sweepstouch.png"
import { useEffect, useRef } from "react"
import { useAnimate } from "../hooks/useAnimate"

const Corporations = () => {

  const { observer } = useAnimate()

  const brandsContainer = useRef(null)

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
