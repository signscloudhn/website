import "@styles/components/Contacto.scss"

const Contacto = () => {
  return (
    <section className="contacto">
      <a name="contact" ></a>
      <h2>Contacto</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input name="nombre"></input>
        <label htmlFor="puesto">Puesto al que aplica:</label>
        <input name="puesto"></input>
        <label htmlFor="cv">CV (PDF o Word):</label>
        <div className="form__file-reader" >
          <p>Arrastre el archivo o</p>
          <input name="cv" type="file" ></input>
        </div>
        <label htmlFor="enlace">Enlace al portafolio o Repositorio:</label>
        <input name="enlace"></input>
        <label htmlFor="telefono">Telefono:</label>
        <input name="telefono"></input>
        <label htmlFor="msg">Comentario:</label>
        <input className="msg" name="msg"></input>
        <button>Enviar</button>
      </form>
    </section>
  )
}

export default Contacto
