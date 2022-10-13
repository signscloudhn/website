import * as yup from "yup"

const requerido = "Campo requerido"

export const validationsForm = {
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
  cv: yup
    .mixed()
    .required("El CV es obligatorio")
    .test("fileFormat", "Debe ser un archivo .pdf o .docx", (value) => {
      return value?.type === "application/pdf" || value?.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    }),
}

export const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  puesto: "",
  enlace: "",
  cv: "",
  msg: "",
}