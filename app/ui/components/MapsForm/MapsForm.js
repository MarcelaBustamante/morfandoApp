import React, { useEffect, useState } from "react";
import { Text } from "react-native";
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

export function MapForm(props) {
    const { show, close } = props;
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
            if(statusGrant !== 'granted'){
                Toast.show({
                    type: "info",
                    position: "bottom",
                    text1: "Activar permisos, Para esto ve a ajustes"
                });
                return;
            }
        });
        console.log("GPS");
        Geolocation.getCurrentPosition(info => {setLocation({
            latitude: info.coords.altitude,
            longitude: info.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        })});
    }, []);
    return (
        <Modal show={show} close={close}>
            <Text>MapForm</Text>
        </Modal>
    )
}