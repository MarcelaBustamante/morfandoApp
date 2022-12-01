import React  from 'react';
import { View, StyleSheet } from 'react-native';
import TagsList from "./TagsList";
import CarouselImages from "./CarouselImages";
import NavegationBarMenu from "./NavegationBarMenu";
import Days from './Days';
import RatingView from "./RatingView"

const HeaderForMenu =({
    restaurant,
    navigateToEditScreen1,
    navigateToHome

})  => {
    
    if (!restaurant) {
        return <View />
    }
return(
    <View>
        <NavegationBarMenu
            navigateToEditScreen1={navigateToEditScreen1} 
            navigateToHome= {navigateToHome}
            restaurant={restaurant}/>
        <CarouselImages images={restaurant.photos}/> 
        <View style={{flexDirection:"row", justifyContent: "space-between"}} >
        <TagsList tags={[restaurant.type]}/> 
        <RatingView/>
        </View>
        <Days businessHours={restaurant.businessHours}/> 
    </View>
);
}
export default HeaderForMenu;
