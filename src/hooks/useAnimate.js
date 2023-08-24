import { gsap } from "gsap"

export const useAnimate = () => {

  const observer = new IntersectionObserver((e) => {
    e.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          translateX: 0,
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






  return {
    observer
  }
}