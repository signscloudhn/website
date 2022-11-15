import { Formik, Form, Field, ErrorMessage } from "formik"
import { validationsForm, initialForm } from "../data/form"
import * as yup from "yup"
import Spin from "./common/Spin"
import { useState } from "react"
import axios, { AxiosError } from "axios"

const Formulario = () => {
  const [style, setStyle] = useState({})

  const [stateForm, setStateForm] = useState({
    send: false,
    disabled: false,
    loading: false,
    error: false,
  })

  const { send, disabled, loading, error } = stateForm

  const buttonTxt = () => {
    if (send) {
      return "Enviado"
    } else if (loading) {
      return "Enviando"
    } else {
      return "Enviar"
    }
  }

  const formData = new FormData()

  const sendForm = (data, values) => {
    axios({
      method: "post",
      url: process.env.URL_API,
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        setStateForm({
          ...stateForm,
          send: true,
        })
        Object.entries(values).forEach(([key, value]) => {
          values[key] = typeof value === "string" ? "" : undefined
        })
        setTimeout(() => {
          setStateForm({
            ...stateForm,
            disabled: false,
            loading: false,
            send: false,
          })
        }, 2000)
      })
      .catch((err) => {
        setStateForm({
          ...stateForm,
          disabled: false,
          loading: false,
          error: true,
        })
        setTimeout(() => {
          setStateForm({
            ...stateForm,
            error: false,
          })
        }, 5000)
      })
  }

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
      f.setFieldValue("cv", e.dataTransfer.files[0])
    }
    cargarArchivo(e.dataTransfer.files[0])
    setStyle({
      outlineColor: "rgba(163, 157, 157, 0.333)",
    })
  }

  const submit = (values) => {
    Object.entries(values).forEach(([key, value]) => {
      formData.append(`${key}`, value)
    })
    sendForm(formData, values)
    setStateForm({
      ...stateForm,
      disabled: true,
      loading: true,
    })
  }


  return (
    <Formik
      initialValues={initialForm}
      onSubmit={(values) => {
        submit(values)
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
          <ErrorMessage name="phone" component="p" style={{ color: "red" }} />

          <label htmlFor="vacant">Puesto al que aplica:</label>
          <Field name="vacant" type="text" />
          <ErrorMessage name="vacant" component="p" style={{ color: "red" }} />

          {!send && !loading && (
            <>
              <label htmlFor="cv">CV (PDF):</label>
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
                  accept=".pdf"
                  className="custom-file-input"
                ></input>
              </div>
            </>
          )}

          <ErrorMessage name="cv" component="p" style={{ color: "red" }} />

          <label htmlFor="link">Enlace al portafolio o Repositorio:</label>
          <Field name="link" type="text" />
          <ErrorMessage name="link" component="p" style={{ color: "red" }} />

          <label htmlFor="comment">Comentario:</label>
          <Field name="comment" component="textarea" className="msg" />

          {loading && <Spin />}

          {error && (
            <p style={{ color: "red", margin: 5 }}>
              Algo salio mal, procura no enviar un pdf demasiado grande o
              pesado.
            </p>
          )}

          <button
            disabled={disabled ? true : false}
            type="submit"
            style={send ? { color: "green" } : undefined}
          >
            {buttonTxt()}
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Formulario
