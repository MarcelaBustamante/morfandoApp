import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AirbnbRating, Input, Button } from "react-native-elements";
import Theme from "../../styles/Theme";

export function AddCommentScreenUI (){

    return(
        <View style ={styles.content}>
            <View>
                <View style= {styles.ratingContent}>
                    <AirbnbRating 
                    count={5} 
                    reviews={["Muy malo", "Malo", "Normal", "Bueno", "Muy bueno"]}
                    defaultRating= {0}
                    size={15}
                    //onFinishRating={(rating)}
                    />
                </View>
                <View>
                    <Input placeholder="Título"/>
                    <Input placeholder="Comentario" multiline inputContainerStyle={styles.comment}></Input>
                </View>
            </View>
            <Button style={styles.button} title="Enviar Comentario" ></Button>
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
        height: 160,
        justifyContent: "center",
    },
    comment: {
        height: 150,
    },
    button:{
        marginBottom: 20,
        backgroundColor: Theme.colors.PRIMARY
    }
})