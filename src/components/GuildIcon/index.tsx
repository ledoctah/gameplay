import React from 'react';
import { Image, Text } from 'react-native';

import { styles } from './style';

export function GuildIcon() {
  return (
    <Image
      source={{ uri: 'https://icon-library.com/images/what-is-the-discord-icon/what-is-the-discord-icon-18.jpg' }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}
