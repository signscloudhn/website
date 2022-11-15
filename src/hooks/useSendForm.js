import { useState } from "react"
import axios, { AxiosError } from "axios"

const useSendForm = () => {
  const [stateForm, setStateForm] = useState({
    send: false,
    disabled: false,
    loading: false,
    error: false,
  })
  const { send, disabled, loading, error } = stateForm

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

  return {
    send,
    disabled,
    loading,
    error,
    submit,
    stateForm,
    setStateForm,
  }
}

export default useSendForm
