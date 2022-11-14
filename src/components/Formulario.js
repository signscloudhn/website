import { Formik, Form, Field, ErrorMessage } from "formik"
import { validationsForm, initialForm } from "../data/form"
import * as yup from "yup"
import { useState } from "react"
import axios from "axios"

const Formulario = () => {
  const [style, setStyle] = useState({})

  const [send, setSend] = useState(false)
  const [disabled, setDisabled] = useState(false)

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
      // const reader = new FileReader()
      // reader.onload = (e) => {
      //   // reader.readAsDataURL(ar)
      // }
      f.setFieldValue("cv", e.dataTransfer.files[0])
    }
    cargarArchivo(e.dataTransfer.files[0])
    setStyle({
      outlineColor: "rgba(163, 157, 157, 0.333)",
    })
  }

  const sendForm = (data) => {
    axios({
      method: 'post',
      url: process.env.URL,
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log(res);
      setSend(true)
      setTimeout(() => {
        setSend(false)
        setDisabled(false)
      }, 3000)
    })
      .catch((err) => {
        console.log(err);
      })
  }

  const formData = new FormData()

  return (
    <Formik
      initialValues={initialForm}
      onSubmit={(values, { resetForm }) => {
        formData.append('cv', values.cv)
        formData.append('name', values.name)
        formData.append('email', values.email)
        formData.append('phone', values.phone)
        formData.append('vacant', values.vacant)
        formData.append('comment', values.comment)
        formData.append('link', values.link)
        sendForm(formData)
        resetForm()
        setDisabled(true)
        console.log(values)

      }}
      validationSchema={yup.object(validationsForm)}
    >
      {(formik) => (
        <Form>
          <label htmlFor="name">Nombre completo:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="p" style={{ color: "red" }} />

          <label htmlFor="email">Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />

          <label htmlFor="phone">Telefono:</label>
          <Field name="phone" type="text" />
          <ErrorMessage
            name="phone"
            component="p"
            style={{ color: "red" }}
          />

          <label htmlFor="vacant">Puesto al que aplica:</label>
          <Field name="vacant" type="text" />
          <ErrorMessage name="vacant" component="p" style={{ color: "red" }} />

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

          <label htmlFor="link">Enlace al portafolio o Repositorio:</label>
          <Field name="link" type="text" />
          <ErrorMessage name="link" component="p" style={{ color: "red" }} />

          <label htmlFor="comment">Comentario:</label>
          <Field name="comment" component="textarea" className="msg" />

          <button disabled={disabled ? true : false} type="submit" style={send ? { color: "green" } : undefined} > {send ? 'Enviado' : 'Enviar'} </button>
        </Form>
      )}
    </Formik>
  )
}

export default Formulario
