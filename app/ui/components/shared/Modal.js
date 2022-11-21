
import React, { Children } from 'react';
import { Overlay } from '@rneui/themed';
import { StyleSheet,View } from 'react-native';

export function Modal(props){
    const {show, close, children} = props;
    
    return(
        <View>
            <Overlay isVisible={show} overlayStyle={styles.overlay} onBackdropPress={close}>
                {children}
            </Overlay>
        </View>
    )
}

const styles = StyleSheet.create({
    overlay:{
        height:'auto',
        width:'90%',
        backgroundColor:'#fff',
    }
});