import React from 'react';
import CommentsViewUI from './CommentsViewUI';
import { useFormik } from 'formik';
import { initialValues, validationSchemma } from './CommentsView.data';
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../../../redux/slices/newCommentSlice';
import { addReview } from '../../../networking/api/endpoints/reviewsWS';

export default function CommentsView({route}) {
  welcomeString = 'Bienvenido a Morfando';
  const {userId} = useSelector(state => state.clientLogin);
  const {restaurant} = route.params;
  const dispatch = useDispatch();
  const loginHandler = () => {
    console.log("Hola mundo");
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchemma(),
    validateOnChange: false,
    onSubmit: async (formValue) =>{
      console.log(formValue);
      console.log(restaurant.id)
      await addReview(formValue, restaurant.id)
      //dispatch(createReview({formValue,restoId: restaurant.id}))
      //navigation.navigate(NavigatorConstant.NEW_RESTAURANT_STACK.SCREEN_2,{form: formValue});
    }
  });

  return (
          <CommentsViewUI
            restaurantId={restaurant.id}
            formik = {formik}
          />
  )};
