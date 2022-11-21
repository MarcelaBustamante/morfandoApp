import * as Yup from 'yup';
export function initialValues(){
    return {
        name: "",
        street: "",
        number: "",
        country: "",
        province: "",
    }
}

export function validationSchemma(){
    return Yup.object({
        name: Yup.string().required("Campo nombre es obligatorio"),
        street: Yup.string().required("Campo calle es obligatorio"),
        number: Yup.number().required("Campo el campo es numérico y obligatorio"),
        country: Yup.string(),
        province: Yup.string(),
        
    })
}