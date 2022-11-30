import React  from 'react';
import { View } from 'react-native';
import TagsList from "./TagsList";
import CarouselImages from "./CarouselImages";
import NavegationBarClientMenu from "./NavegationBarClientMenu";
import Days from './Days';

const HeaderForClientMenu = ({}) => {
    welcomeString = 'Bienvenido a Morfando';
    const loginHandler = () => {
        console.log("Hola mundo");
      }
return(
    <View>
        <NavegationBarClientMenu                    
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
export default HeaderForClientMenu;