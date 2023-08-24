import "@styles/components/LogoAndAbout.scss"
import LogoSVG from "./common/LogoSVG"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const LogoAndAbout = () => {

  const container = useRef()

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".logo", { translateY: 0, delay: 0.5, ease: "back.out(1.7)" })
    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section className="logo-n-about">
      <div className="logo-n-about__filter" ref={container} >
        <div className="logo">
          <LogoSVG />
        </div>
      </div>
    </section>
  )
}

export default LogoAndAbout
