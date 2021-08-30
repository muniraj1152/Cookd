import React, { useState, useRef } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View, ScrollView } from 'react-native';
import Colors from '../../theme/Color';
import Video from 'react-native-video';
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native'

/**
 * To display video component, automtically starts video while focus 
 * @param {*} param which contains autoPlay video url and title 
 */
export default function AutoPlay({ autoPlay }) {

  const [isVisible, setIsVisible] = useState(false)

  const handleVideoVisibility = visible => {
    setIsVisible(visible)
  }
  let reference = null;

  const onBuffer = () => {
    console.log('video buffered---');
  }

  const onVideoError = () => {
    console.log('Error while playing video');
  }

  return (
    <TouchableOpacity style={styles.container} >
      <VisibilitySensor onChange={handleVideoVisibility}>
        <Video source={{ uri: autoPlay.recipe_lite.streaming_url }}
          ref={(ref) => {
            reference = ref
          }}

          onBuffer={() => onBuffer()}
          onError={() => onVideoError()}
          paused={!isVisible}
          resizeMode="cover"
          style={{
            height: 200,
          }} />
      </VisibilitySensor>

      <Text style={styles.title}>{autoPlay.title}</Text>
      <Text style={styles.subText}>Trending now - 323 cook made it</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10, marginVertical: 10, backgroundColor: Colors.WHITE
  },
  title: {
    fontSize: 14, fontWeight: '500'
  },
  subText: {
    fontSize: 10, color: Colors.GREY
  }
});
