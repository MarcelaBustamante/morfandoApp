import React  from 'react';
import { View } from 'react-native';
import TagsList from "./TagsList";
import CarouselImages from "./CarouselImages";
import RatingView from "./RatingView";
import NavegationBarClientMenu from "./NavegationBarClientMenu";
import Days from './Days';

const HeaderForClientMenu = ({restaurant}) => {
    if (!restaurant) {
        return <View />
    }
    return(
        <View>
            <NavegationBarClientMenu restaurant={restaurant}/>
            <CarouselImages images={restaurant.photos}/> 
            <View style={{flexDirection:"row", justifyContent: "space-between"}} >
            <TagsList tags={[restaurant.type]}/> 
            <RatingView/>
            </View>
            <Days businessHours={restaurant.businessHours}/> 
        </View>
    );
}
export default HeaderForClientMenu;



