import { Avatar } from '@rneui/themed';
import { config } from '../../../config/config';
export default function AvatarCustom({
    uri,
    styles,
    onPress
  }) {
    return(
        <Avatar
            key={uri}
            source={{uri: uri.startsWith("http") ? uri : config.BASE_URL_IMAGE + uri}}
            containerStyle={styles}
            onPress={onPress}
        />
    );
  }