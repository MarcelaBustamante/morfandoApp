import React from 'react';
import CommentsViewUI from './CommentsViewUI';
import { useFormik } from 'formik';
import { initialValues, validationSchemma } from './CommentsView.data';
import { addReview } from '../../../redux/slices/newCommentSlice';

export default function CommentsView({}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchemma(),
    validateOnChange: false,
    onSubmit: async (formValue) =>{
      console.log(formValue);
      dispatch(addReview({
        "comment": formValue.comment,
        "rating": formValue.rating,
      }))
      //navigation.navigate(NavigatorConstant.NEW_RESTAURANT_STACK.SCREEN_2,{form: formValue});
    }
  });

  return (
          <CommentsViewUI
            formik = {formik}
          />
  )};
