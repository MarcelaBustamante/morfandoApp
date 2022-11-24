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
                color={Theme.colors.PRIMARY} 
                overlayBackgroundColor="transparent"
                />
            {text && <Text>{text}</Text>}
        </View>
      </Overlay>
    )
}

LoadingModal.defaultProps = {
    show: false,
}

const styles = StyleSheet.create({
    overlay:{
        height:100,
        width:200,
        backgroundColor:'#fff',
        borderColor: Theme.colors.SECONDARY
    },
    view:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
});