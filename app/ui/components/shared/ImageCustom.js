import { config } from '../../../config/config';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function ImageCustom({
  uri,
  styles,
  onPress
}) {
  if (!uri) {
    return <></>
  }
  return(
    <TouchableOpacity onPress={onPress}>
      <Image
        key={uri}
        style={styles}
        source={{uri: uri.startsWith("http") ? uri : config.BASE_URL_IMAGE + uri}}
      />
    </TouchableOpacity>
      
  );
}