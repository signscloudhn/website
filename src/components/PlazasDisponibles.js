import { Link } from "react-scroll"
import { plazas } from "../data/plazas"
import Location from "./common/Location"
import "@styles/components/PlazasDisponibles.scss"

const PlazasDisponibles = () => {
  return (
    <section className="plazas" id="plazas">
      <h2>Plazas Disponibles</h2>

      <div className="plazas__cards-container">
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
    </section>
  )
}

export default PlazasDisponibles
