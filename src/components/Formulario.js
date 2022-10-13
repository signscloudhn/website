import { Formik, Form, Field, ErrorMessage } from "formik"
import { validationsForm, initialForm } from "../data/form"
import * as yup from "yup"
import { useState } from "react"

const Formulario = () => {
  const [style, setStyle] = useState({})

  const dragOver = (e) => {
    e.preventDefault()
    setStyle({
      outlineColor: "white",
    })
  }

  const dragLeave = () => {
    setStyle({
      outlineColor: "rgba(163, 157, 157, 0.333)",
    })
  }

  const drop = (e, f) => {
    e.preventDefault()
    const cargarArchivo = (ar) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        reader.readAsDataURL(ar)
      }
      f.setFieldValue("cv", e.dataTransfer.files[0])
    }
    cargarArchivo(e.dataTransfer.files[0])
    setStyle({
      outlineColor: "rgba(163, 157, 157, 0.333)",
    })
  }

  return (
    <Formik
      initialValues={initialForm}
      onSubmit={(values) => {
        console.log(values)
      }}
      validationSchema={yup.object(validationsForm)}
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
          <ErrorMessage
            name="telefono"
            component="p"
            style={{ color: "red" }}
          />

          <label htmlFor="puesto">Puesto al que aplica:</label>
          <Field name="puesto" type="text" />
          <ErrorMessage name="puesto" component="p" style={{ color: "red" }} />

          <label htmlFor="cv">CV (PDF o Word):</label>
          <div
            className="form__file-reader"
            onDragOver={(e) => {
              dragOver(e)
            }}
            onDragLeave={dragLeave}
            onDrop={(e) => drop(e, formik)}
            style={style}
          >
            <p>Arrastre el archivo o</p>
            <input
              name="cv"
              onChange={(event) => {
                event.preventDefault()
                formik.setFieldValue("cv", event.currentTarget.files[0])
              }}
              type="file"
              accept=".pdf,.docx"
              className="custom-file-input"
            ></input>
          </div>
          <ErrorMessage name="cv" component="p" style={{ color: "red" }} />

          <label htmlFor="enlace">Enlace al portafolio o Repositorio:</label>
          <Field name="enlace" type="text" />
          <ErrorMessage name="enlace" component="p" style={{ color: "red" }} />

          <label htmlFor="msg">Comentario:</label>
          <Field name="msg" component="textarea" className="msg" />

          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  )
}

export default Formulario
