import "@styles/components/Contacto.scss"

const Contacto = () => {
  return (
    <section className="contacto" >
      <h2>Contacto</h2>
      <form>
        <label htmlFor="nombre" >Nombre:</label>
        <input name="nombre" ></input>
        <label htmlFor="puesto" >Puesto al que aplica:</label>
        <input name="puesto" ></input>
        <label htmlFor="cv" >CV (PDF o Word):</label>
        <input name="cv" ></input>
        <label htmlFor="enlace" >Enlace al portafolio o Repositorio:</label>
        <input name="enlace" ></input>
        <label htmlFor="telefono" >Telefono:</label>
        <input name="telefono" ></input>
        <label htmlFor="msg" >Comentario:</label>
        <input name="msg" ></input>
      </form>
    </section>
  );
}

export default Contacto;