import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import Theme from '../../styles/Theme';
import IMAGES from "../../../assets/images/index";
import { Button } from "@react-native-material/core";
import { LoadingModal } from "../../components/shared/LoadingModal/LoadingModal"

const LoginScreenUI = ({
  navigateToClient,
  error,
  loginHandler,
  navigateToRegister,
  username,
  onChangeUsername,
  password,
  onChangePassword,
  navigateToRecovery,
  isLoading

}) => {

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <IMAGES.logo style={styles.image} />
        <Text style={styles.title}>Bienvenido a Morfando</Text>
        <Text style={styles.subTitle}>Ingrese su cuenta</Text>
      </View>
      <View style={styles.viewRow}>
        <View style={styles.tabLeftButton}><Button  variant="text" onPress={navigateToClient} title="Cliente" /></View>
        <View style={styles.tabRightButton}><Button color={Theme.colors.GREY} variant="text" title="Restaurante" /></View>
      </View>
      <View style={styles.form}>
        {error && <Text style={styles.error}>{error}</Text>}
        <TextInput
          style={styles.input}
          placeholder='Usuario'
          placeholderTextColor={Theme.colors.PRIMARY}
          value={username}
          onChangeText={onChangeUsername}
        />
        <TextInput
          style={styles.input}
          placeholder='Contraseña'
          placeholderTextColor={Theme.colors.PRIMARY}
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={true}
        />
        <Button style={styles.button} onPress={loginHandler} title="Ingresar" />
        <Button variant="text" title="Recuperar contraseña" onPress={navigateToRecovery} color={Theme.colors.SECONDARY} />
        <Button variant="text" title="¿No tienes una cuenta? ¡Registrate!" color={Theme.colors.PRIMARY}
          onPress={navigateToRegister} />
      </View>
      <LoadingModal
        text="Iniciando sesión"
        show={isLoading}
        />
    </View>
  );
}

export default LoginScreenUI;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: 'center'
    , alignItems: 'center'
  },
  viewRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10
  },
  title: {
    fontSize: 32,
    color: Theme.colors.PRIMARY,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 24,
    color: Theme.colors.PRIMARY,
  },
  error: {
    color: Theme.colors.ERROR,
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: Theme.colors.PRIMARY,
    width: 250,
    height: 39,
    margin: 10,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    color: Theme.colors.PRIMARY
  },
  image: {
    height: 80,
    width: 80,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 39,
    margin: 7,
  },
  forgotPassword: {
    borderColor: "gray",
  },
  form: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    marginTop: 0,
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
  image: {
    width: 150,
    height: 39,
  },
  tabLeftButton: { backgroundColor: Theme.colors.GREY, borderTopLeftRadius: 20, marginLeft: 17, width: 178, height: 40 },
  tabRightButton: { backgroundColor: Theme.colors.PRIMARY, borderTopRightRadius: 20, marginRight: 17, width: 178, height: 40 }
});