import * as Yup from 'yup';
export function initialValues(){
    return {
        comment: "",
        rating: "",
    }
}

export function validationSchemma(){
    return Yup.object({
        comment: Yup.string().required("Campo comentario es obligatorio"),
        rating: Yup.number().required("Campo rating es obligatorio"),

    })
}