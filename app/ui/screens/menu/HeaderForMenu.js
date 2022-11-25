import React, { useState }  from 'react';
import TipeFoodList from './TipeFoodList';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '@react-native-material/core';
import Theme from '../../styles/Theme';
import { View, Text, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import TagsList from "./TagsList";
import CarouselImages from "./CarouselImages";
import NavegationBarMenu from "./NavegationBarMenu";
import Days from './Days';

const HeaderForMenu = ({}) => {
    welcomeString = 'Bienvenido a Morfando';
    const loginHandler = () => {
        console.log("Hola mundo");
      }
return(
    <View>
        <NavegationBarMenu                    
        loginHandler={loginHandler}/>
        <CarouselImages                    
        loginHandler={loginHandler}/> 
        <TagsList                    
        loginHandler={loginHandler}/> 
        <Days                    
        loginHandler={loginHandler}/> 
    </View>
);
}
export default HeaderForMenu;