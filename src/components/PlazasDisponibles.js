import { plazas } from "../data/plazas";
import "@styles/components/PlazasDisponibles.scss"

const PlazasDisponibles = () => {
  console.log(plazas)
  return (
    <section className="plazas" >
      <h2>Plazas Disponibles</h2>
      <div className="plazas__cards-container" >
        {plazas.map((p) => {
          return (<article className="plaza-card" >
            <div>
              <h4>{p.puesto}</h4>
              <p>{p.empresa}</p>
              <p>{p.jornada}</p>
              <p>{p.lugar}</p>
            </div>
            <a>Aplicar ya</a>
          </article>)
        })}
      </div>
    </section>
  );
}

export default PlazasDisponibles;