import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import Button from '../Button'

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{uri: 'https://yt3.ggpht.com/-kBzb55hr024/AAAAAAAAAAI/AAAAAAAAD1I/GXCEn77cFzI/s88-mo-c-c0xffffffff-rj-k-no/photo.jpg'}} />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Flávio Martins</Text>
        <Text style={styles.bio}>Revenda de produtos masculinos</Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.firstButton}>Mensagens</Button>
          <Button type="outline">Seguir</Button>
        </View>
      </View>
    </View>
  )
}

export default SubHeader
