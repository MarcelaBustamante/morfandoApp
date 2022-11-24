import * as Yup from 'yup';
export function initialValues(){
    return {
        name: "",
        street: "",
        country: "",
        province: "",
        location: null,
    }
}

export function validationSchemma(){
    return Yup.object({
        name: Yup.string().required("Campo nombre es obligatorio"),
        street: Yup.string().required("Campo calle es obligatorio"),
        country: Yup.string(),
        province: Yup.string(),
        location: Yup.object().required("La locacion es requerida, agreguela desde el icono")
        
    })
}