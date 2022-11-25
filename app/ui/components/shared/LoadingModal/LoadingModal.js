import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Overlay, Text } from '@rneui/themed';
import Theme from '../../../styles/Theme';

export function LoadingModal(props){
    const { show, text } = props;
    return(
      <Overlay isVisible={show} overlayStyle={styles.overlay} >
        <View style={styles.view}>
            <ActivityIndicator 
                size="large" 
                color={Theme.colors.SECONDARY} 
                overlayBackgroundColor="transparent"
                />
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
      </Overlay>
    )
}

LoadingModal.defaultProps = {
    show: true,
}

const styles = StyleSheet.create({
    overlay:{
        height:100,
        width:200,
        backgroundColor:'#fff',
        borderColor: Theme.colors.SECONDARY,
        borderWidth:2,
        borderRadius:10
    },
    view:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color: Theme.colors.SECONDARY
    }
});