import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './style';

type Props = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  )
}
