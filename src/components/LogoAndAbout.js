import logo from "@img/logo-signscloud.png"
import "@styles/components/LogoAndAbout.scss"


const LogoAndAbout = ({ showText, setShowText }) => {


  const handleText = () => {
    setShowText(!showText)
  }

  return (
    <section className="logo-n-about">
      <div className="logo-n-about__filter">
        <img src={logo}></img>
        <a name="about" ></a>
        {showText && (
          <div className="logo-n-about__text" >

            <p>
              Somos una empresa de soluciones para producciones digitales. Nuestra
              historia comienza con 2 soñadores que se convierten en visionarios
              con el deseo de alcanzar más. Creativos que creían en lograr
              soluciones digitales impresionantes. <br /> Ellos se convirtieron en
              precursores de este proyecto, cimentando y creando las bases de lo
              que somos hoy. En momentos llegaron a solo dormir 3 horas al día
              para alcanzar lo que empezó como un sueño. Nos sentimos orgullosos
              de la excelencia en servicio y calidad que brindamos.
              <br />
              <br />
              Esto es posible gracias a las personas con las que decidimos
              trabajar y nuestra filosofía de trabajo. Creemos en hacer las cosas
              con pasión y confiamos en nuestros procesos. Uno de nuestros
              procesos que más nos enorgullece es la selección del personal ideal.
              En el inicio en Honduras fue con 7 personas. Actualmente contamos
              con mas de 35 personas. Este éxito es parte de lo que nos a traído
              al lugar donde estamos el día de hoy.
              <br />
              <br />
              Lo que se transmite en la plena confianza en las personas encargadas
              e involucradas en cada proyecto. Estamos ansiosos por proyectos de
              todo tamaño y nivel de complejidad. Nuestra empresa enfoca su
              cultura en reconocer a las personas con una gran cantidad de
              creatividad natural y desarrollarlas a su máximo nivel.
            </p>
          </div>
        )}
      </div>

      <div className="logo-n-about__btn">
        <a href={showText ? "/#about" : "#"}  > <button onClick={handleText}  >
          {!showText ? "Sobre Nosotros" : "Cerrar"}

        </button></a>
      </div>
    </section>
  )
}

export default LogoAndAbout
