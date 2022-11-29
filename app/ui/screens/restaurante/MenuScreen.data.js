import * as Yup from 'yup';
export function initialValues(){
    return {
        name: "",
        type: "",
        category: "",
        description: "",
        vegan: false,
        tac: false,
        photo: [],
    }
}

export function validationSchemma(){
    return Yup.object({
        name: Yup.string().required("Campo nombre es obligatorio"),
        type: Yup.string().required("Campo typo es obligatorio"),
        description: Yup.string().required("Campo descripción es obligatorio"),
        photo: Yup.array().min(1, "Se requiere una imagen como mínimo").required("La imagen es requerida")
    })
}