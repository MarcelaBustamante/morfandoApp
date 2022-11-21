
import DocumentPicker, {types} from 'react-native-document-picker';
import { Button  } from "@react-native-material/core";
import { StyleSheet} from 'react-native';
import Theme from '../../styles/Theme';
import axios from 'axios';

const handleUpload = async function (onSuccess) {
    const pickResult = await DocumentPicker.pick({
      presentationStyle: 'pageSheet',
      type: types.images
    });
    const file = pickResult[0];
    const { uploadURL, fileKey } = await getUploadURL(file.name, file.size);
    await uploadImage(uploadURL, file.uri);
    onSuccess(fileKey);
};

export default function FileUploadButton({
    title,
    onSuccess
}) {
    return (
        <Button 
            style={styles.uploadButton} 
            onPress={() => handleUpload(onSuccess)} 
            title={title}
            color={Theme.colors.SECONDARY}/>
    );
}

const styles = StyleSheet.create({
    button:{
      margin: 13,
    },
    uploadButton:{
      width: 200,
      margin: 13,
      alignSelf: "center",
    }
});

const getUploadURL = async (fileName, fileSize) => {
  const url = `/files/upload/link?fileName=${fileName}&fileSize=${fileSize}`;
  const response = await axios.get(url);
  const data = await response.data;
  return {
    uploadURL: data.uploadURL,
    fileKey: data.fileKey
  };
};

const getBlob = async (fileUri) => {
  const resp = await fetch(fileUri);
  return await resp.blob();
};
  
const uploadImage = async (uploadURL, fileURI) => {
  const imageBody = await getBlob(fileURI);
  return fetch(uploadURL, {
    method: "PUT",
    body: imageBody,
  });
};