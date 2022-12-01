import React  from 'react';
import { View } from 'react-native';
import TagsList from "./TagsList";
import CarouselImages from "./CarouselImages";
import NavegationBarMenu from "./NavegationBarMenu";
import Days from './Days';

const HeaderForMenu = ({}) => {
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