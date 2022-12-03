import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AirbnbRating, Input, Rating } from "react-native-elements";
import Theme from "../../styles/Theme";
import { Button } from '@react-native-material/core';

export function AddCommentScreenUI ({formik}){

    return(
        <View>
            <Button style={styles.circle} title="<"/>
        <View style ={styles.content}>
            <Text style ={styles.title}>Agregar Comentario</Text>
            <View>
                <View style= {styles.ratingContent}>
                    <AirbnbRating 
                    count={5} 
                    reviews={["Muy malo", "Malo", "Normal", "Bueno", "Muy bueno"]}
                    defaultRating= {0}
                    size={15}
                    //onFinishRating={(rating)}
                    onFinishRating={(rating) => { formik.setFieldValue('rating', rating) }}
                    errorMessage={formik.errors.name}
                    />
                </View>
                <View>
                    <Input placeholder="Comentario" 
                    multiline 
                    inputContainerStyle={styles.comment} 
                    onChangeText={(text) => { formik.setFieldValue('comment', text) }}
                    errorMessage={formik.errors.name}>
                    </Input>
                </View>
            </View>
            <Button style={styles.button} onPress={formik.handleSubmit} title="Enviar Comentario" ></Button>
            <Text style ={styles.title}>Más Comentarios</Text>
        </View>
        </View>
    );
       
}

export default AddCommentScreenUI;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginHorizontal: 15,
        justifyContent: "space-between"
    },
    ratingContent:{
        height: 50,
        justifyContent: "center",
    },
    comment: {
        height: 150,
    },
    button:{
        marginBottom: 20,
        backgroundColor: Theme.colors.PRIMARY
    }, circle:{
        width:39,
        height:39,
        borderBottomEndRadius: 20,
        borderTopEndRadius: 20,
        margin: 5,
      },
      title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Theme.colors.SECONDARY
      },
})