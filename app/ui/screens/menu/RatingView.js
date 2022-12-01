import React, { useState }  from 'react';
import { View, Text, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import Theme from "../../styles/Theme";
import { Rating } from 'react-native-elements';
import { Icon } from '@rneui/base';

export default function RatingView({navigateToComment}) {
    welcomeString = 'Bienvenido a Morfando';

    return (
        <View style={{flexDirection:"row", justifyContent: "space-between"}} >
            <Icon
                raised
                type= "material-community"
                name= "comment-processing-outline"
                color= {Theme.colors.PRIMARY}
                size={18}
                onPress={navigateToComment} />
           <View style={styles.container}> 
           <Rating 
           imageSize= {30} 
           readonly 
           fractions="{1}" 
           startingValue="{3.3}"
           /> 
        </View>
        </View>

    )};

const styles = StyleSheet.create({
    container: {
        marginTop: 11,
        marginRight: 7,
        backgroundColor: 'rgba(52, 52, 52, 0.0)'
    }
    });