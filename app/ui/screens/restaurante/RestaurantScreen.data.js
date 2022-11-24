import { yupToFormErrors } from 'formik';
import * as Yup from 'yup';
export function initialValues(){
    return {
        name: "",
        street: "",
        number: "",
        country: "",
        province: "",
        location: null,
        imageRest: [],
    }
}

export function validationSchemma(){
    return Yup.object({
        name: Yup.string().required("Campo nombre es obligatorio"),
        street: Yup.string().required("Campo calle es obligatorio"),
        country: Yup.string(),
        province: Yup.string(),
        location: Yup.object().required("La locacion es requerida, agreguela desde el icono"),
        imageRest: Yup.array().min(1, "Se requiere una imagen como mínimo").required("La imagen es requerida")
    })
}