import React from "react";
import { Text } from "react-native";
import { Modal } from "../shared/Modal";

export function MapForm(props) {
    const { show, close } = props;
    return(
        <Modal show={show} close={close}>
            <Text>MapForm</Text>
        </Modal>
    )
}