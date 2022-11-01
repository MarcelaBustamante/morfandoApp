import { Image,
    StyleSheet,
    View,
    Text,
    TextInput} from 'react-native';
import Theme from '../../styles/Theme';
import { Button } from "@react-native-material/core";

const AskMailUI = ({
    primText = 'No vino ningún texto',
    secText,
    loginHandler,
    navigateToAskToken,
    navigateToClient,
  }) => {
   

  
    return (
      <View style={styles.container}>
          <View style={styles.form}>
          <Text style={styles.title}>Recupera tu cuenta</Text>
  
          <Text style={styles.subTitle}>Ingresa tu correo electrónico para buscar tu cuenta.</Text>
            <TextInput
              style={styles.input}
              placeholder='Email'
              placeholderTextColor={Theme.colors.PRIMARY}
              onChange={console.log("name")}
              />
              <View style={{flexDirection:"row", justifyContent: "space-between"}} >
          <Button style={styles.button1} onPress={navigateToClient} title="Cancelar" color={Theme.colors.SECONDARY}/>
          <Button style={styles.button2} onPress={navigateToAskToken} title="Continuar" color={Theme.colors.PRIMARY}/>
          </View>
          </View>
      </View>
    );
  }
  
  export default AskMailUI;
  
  const styles = StyleSheet.create({
    container:{
      flex:1, 
      justifyContent:'center',
    },
    title: {
      marginBottom: 20,
      fontSize: 32,
      color: Theme.colors.PRIMARY,
      fontWeight: "bold",
      alignSelf: "flex-end"
    },
    subTitle:{
      fontSize: 18,
      color: Theme.colors.PRIMARY,
      marginBottom: 10,
    },
    input:{
      borderWidth:1,
      borderColor: Theme.colors.PRIMARY,
      width: 250,
      height: 39,
      marginTop: 30,
      marginBottom: 40,
      borderWidth: 1,
      padding: 5,
      borderRadius: 5,
      alignSelf: "center",
    }, 
    image:{
      height: 80,
      width: 80,
      marginBottom: 10,
    },
     button1:{
      width: 120,
      height: 39,
      margin: 10,
  
    },
    button2:{
      width: 130,
      height: 39,
      margin: 10,
    },
    forgotPassword:{
      borderColor: "gray",
    },
    form:{
      flex:2,
      justifyContent: "center",
      paddingHorizontal: 30,
      paddingVertical: 30,
      marginHorizontal: 10,
      marginVertical: 10,
      marginTop: 50,
      backgroundColor: Theme.colors.GREY,
      shadowColor: "#000000",
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.14,
      shadowRadius: 8,
      elevation: 4,
      borderRadius: 4,
    },
    image:{
      width:150,
      height:39,
    }
  });