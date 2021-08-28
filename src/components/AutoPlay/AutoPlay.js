import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import Colors from '../../theme/Color'

/**
 * To display video component, automtically starts video while focus 
 * @param {*} param which contains autoPlay video url and title 
 */
export default function AutoPlay({ autoPlay }) {
  return (
    <TouchableOpacity style={styles.container}>
      {/* TODO: need to replace with Video */}
      <Image
        source={{
          uri: autoPlay.rectangle_thumbail_url,
        }}
        style={styles.spotImage}
        resizeMode="stretch"
      />
      <Text style={styles.title}>{autoPlay.title}</Text>
      <Text style={styles.subText}>Trending now - 323 cook made it</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10, marginVertical: 10, backgroundColor: Colors.WHITE
  },
  spotImage: {
    height: 270, borderRadius: 30, marginBottom: 7, width: '100%'
  },
  title: {
    fontSize: 14, fontWeight: '500'
  },
  subText: {
    fontSize: 10, color: Colors.GREY
  }
});
