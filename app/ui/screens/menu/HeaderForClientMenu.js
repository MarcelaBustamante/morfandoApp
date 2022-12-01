import React  from 'react';
import { View } from 'react-native';
import TagsList from "./TagsList";
import CarouselImages from "./CarouselImages";
import NavegationBarClientMenu from "./NavegationBarClientMenu";
import Days from './Days';
import RatingView from "./RatingView";

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
        <View style={{flexDirection:"row", justifyContent: "space-between"}} >
        <TagsList                    
        loginHandler={loginHandler}/> 
        <RatingView/>
        </View>
        <Days                    
        loginHandler={loginHandler}/> 
    </View>
);
}
export default HeaderForClientMenu;