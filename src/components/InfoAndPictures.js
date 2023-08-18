import "@styles/components/Info.scss"
import employee from "@img/signscloud_employee.png"
import circularss from "@img/circulares_1.png"
import genericos from "@img/genericos.png"
import flyers from "@img/flyers.png"

export const InfoAndPictures = () => {
  return (
    <section className="info">
      <div className="info__text">
        <p className="info__text--marging-text" >¡Innovación que impulsa tu éxito! En Signscloud hacemos que las empresas sean lo mejor que pueden ser proporcionando soluciones a medida para sus desafíos.
        </p>
        <p>
          Lo que transmitimos es una plena confianza en cada colaborador de los proyectos que desarrollamos. Creemos en hacer
          las cosas con pasión y confiamos en nuestros procesos.
        </p>
      </div>
      <div className="info__img">
        <img src={employee} />
        <img src={circularss} />
      </div>

      <div className="info__img second-image">
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