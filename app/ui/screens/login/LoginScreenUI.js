import { Image,
    StyleSheet,
    View,
    Text,
    TextInput,
    Button} from 'react-native';
import Theme from '../../styles/Theme';
import IMAGES from "../../../assets/images/index";


const LoginScreenUI = ({
    primText = 'No vino ningún texto',
    secText,
    loginHandler
  }) => {
  return (
    <View>
      <IMAGES.logo height={200} width={200}/>
        <View>
        <Text style={styles.text}>{primText}</Text>
          <Text style={styles.text}>{secText}</Text>
        </View>
        <View>
            <TextInput
            style={styles.text}
            placeholder='jfdskffdjss'
            onChange={console.log("name")}
            />
        <Button onPress={() => loginHandler('enviar datos')} title="Ingresar" />
        </View>
      </View>
  );
}

export default LoginScreenUI;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: Theme.colors.BACKGROUND
    },
    image: {
      flex: 2,
      height: 247,
      width: 252,
      left: 78,
      top: 51,
      resizeMode: 'stretch',
      alignContent:"center",
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: Theme.fonts.FONTFAMILY,
    }
  });
