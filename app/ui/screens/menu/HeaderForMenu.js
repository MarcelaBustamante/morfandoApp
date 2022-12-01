import React  from 'react';
import { View } from 'react-native';
import TagsList from "./TagsList";
import CarouselImages from "./CarouselImages";
import NavegationBarMenu from "./NavegationBarMenu";
import Days from './Days';


const HeaderForMenu = ({
    navigateToEditScreen1,
    navigateToMenuOwner
}) => {
    welcomeString = 'Bienvenido a Morfando';
    const loginHandler = () => {
        console.log("Hola mundo");
      }
return(
    <View>
        <NavegationBarMenu
        navigateToEditScreen1={navigateToEditScreen1}
        navigateToMenuOwner= {navigateToMenuOwner}
        />
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