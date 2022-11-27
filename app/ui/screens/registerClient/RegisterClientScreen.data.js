import * as Yup from 'yup';
export function initialValues(){
    return {
        name: "",
        lastName:'',
        email: '',
        //imageRest: [],
      
    }
}

export function validationSchemma(){
    return Yup.object({
        name: Yup.string().required("Campo nombre es obligatorio"),
        lastName: Yup.string().required("Campo apellido es obligatorio"),
        email: Yup.string().required("Campo email es obligatorio"),
        //imageRest: Yup.array().min(0, "Se requiere una imagen como mínimo").required("La imagen es requerida")
    })
}