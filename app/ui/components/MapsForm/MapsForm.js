import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Modal } from "../shared/Modal";
import Geolocation from '@react-native-community/geolocation';
import {
    requestMultiple,
    checkMultiple,
    requestNotifications,
    PERMISSIONS,
    RESULTS,
} from 'react-native-permissions';
import Toast from 'react-native-toast-message';
import MapView, { Marker } from 'react-native-maps';
import { Button } from "@react-native-material/core";
import Theme from "../../styles/Theme";



export function MapForm(props) {
    const { show, close, formik } = props;
    const [statusGrant, setStatusGrant] = useState("");
    const [location, setLocation] = useState({
        "latitude": 0.01,
        "longitude": 0.01,
        "latitudeDelta": 0.01,
        "longitudeDelta": 0.01,
    });

    const config = {
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
        locationProvider: 'auto',
    };
    Geolocation.setRNConfiguration(config);
    //GPS
    useEffect(() => {
        console.log("Chequeando permisios");
        checkMultiple(
            Platform.OS === 'ios'
                ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
                : [
                    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                ],
        ).then(result => {
            if (Platform.OS === 'ios') {
                setStatusGrant(result[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE])
                console.log('Location ios', statusGrant);

            } else {
                setStatusGrant(result[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION])
                console.log(
                    'ACCESS_FINE_LOCATION', statusGrant);
            }
            if (statusGrant !== 'granted') {
                Toast.show({
                    type: "info",
                    position: "bottom",
                    text1: "Activar permisos, Para esto ve a ajustes"
                });
                return;
            }
        });
        Geolocation.getCurrentPosition(info => {
            setLocation({
                latitude: info.coords.altitude,
                longitude: info.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            })
        });
    }, []);

    const saveLocation = ()=>{
        formik.setFieldValue("location", location);
        close();
    }
    return (
        <Modal show={show} close={close}>

            <MapView initialRegion={location}
                showsUserLocation={true}
                style={styles.mapStyle}
                onRegionChange={(locationTem) => setLocation(locationTem)}
            >
                <Marker draggable coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
            </MapView>
            <View style={styles.mapActions}>
                <Button variant="text" 
                    title="Guardar"
                    onPress={saveLocation}
                    />
                <Button variant="text" 
                    title="Cerrar" 
                    color={Theme.colors.SECONDARY} 
                    onPress={close}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    mapStyle: {
        with: "100%",
        height: 550
    },
    mapActions: {
        flexDirection:"row",
        justifyContent:"center",
        marginTop:10,
        paddingLeft:2
    }
});