import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"

import "@styles/components/Contacto.scss"

const Contacto = () => {
  const requerido = "Campo requerido"

  return (
    <section className="contacto">
      <a name="contact"></a>
      <h2>Contacto</h2>

      <Formik
        initialValues={{
          nombre: "",
          email: "",
          telefono: "",
          puesto: "",
          enlace: "",
          msg: "",
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={yup.object({
          nombre: yup
            .string()
            .min(10, "Debe tener 10 caracteres o mas")
            .required(requerido),
          email: yup.string().email("Correo invalido").required(requerido),
          telefono: yup
            .string()
            .matches(
              /^(\+504\s?\-?){0,1}(\d{2,2}\s?\-?){3,3}\d\d$/,
              "Telefono invalido"
            )
            .required(requerido),
          puesto: yup.string().required(requerido),
          enlace: yup.string().required(requerido),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="nombre">Nombre completo:</label>
            <Field name="nombre" type="text" />
            <ErrorMessage name="nombre" component="p" style={{ color: "red" }} />

            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />

            <label htmlFor="telefono">Telefono:</label>
            <Field name="telefono" type="text" />
            <ErrorMessage name="telefono" component="p" style={{ color: "red" }} />

            <label htmlFor="puesto">Puesto al que aplica:</label>
            <Field name="puesto" type="text" />
            <ErrorMessage name="puesto" component="p" style={{ color: "red" }} />

            {/* <label htmlFor="cv">CV (PDF o Word):</label>
        <div className="form__file-reader" >
          <p>Arrastre el archivo o</p>
          <input name="cv" type="file" ></input>
        </div> */}

            <label htmlFor="enlace">Enlace al portafolio o Repositorio:</label>
            <Field name="enlace" type="text" />
            <ErrorMessage name="enlace" component="p" style={{ color: "red" }} />

            <label htmlFor="msg">Comentario:</label>
            <Field name="msg" component="textarea" className="msg" />

            <button type="submit" >Enviar</button>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default Contacto
