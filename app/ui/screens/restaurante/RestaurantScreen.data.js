import * as Yup from 'yup';
export function initialValues(){
    return {
        name: "",
        type: "",
        street: "",
        number: "",
        country: "",
        province: "",
        neighborhood:"",
        location: null,
        imageRest: [],
        businessHours: [],
        isClosed: false,
        priceRange: 1,
    }
}

export function validationSchemma(){
    return Yup.object({
        name: Yup.string().required("Campo nombre es obligatorio"),
        street: Yup.string().required("Campo calle es obligatorio"),
        number: Yup.number().required("Campo número es obligatorio"),
        country: Yup.string().required("Campo País es obligatorio"),
        province: Yup.string().required("Campo provincia es obligatorio"),
        neighborhood: Yup.string().required("Campo localidad es requerido"),
        location: Yup.object().required("La locacion es requerida, agreguela desde el icono"),
        imageRest: Yup.array().min(0, "Se requiere una imagen como mínimo").required("La imagen es requerida")
    })
}