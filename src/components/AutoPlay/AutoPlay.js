import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import Colors from '../../theme/Color';
import Video from 'react-native-video';
import constants from '../../utils/constants';

/**
 * To display video component, automtically starts video while focus 
 * @param {*} param which contains autoPlay video url and title 
 */
export default function AutoPlay({ autoPlay }) {

  const [isPaused, setIsPaused] = useState(true)

  let reference = null;

  const onBuffer = () => {
    console.log('video buffered---');
  }

  const onVideoError = () => {
    console.log('Error while playing video');
  }

  return (
    <SafeAreaView style={styles.container} >
      <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
        <Video source={{ uri: autoPlay.recipe_lite.streaming_url }}
          ref={(ref) => {
            reference = ref
          }}
          onBuffer={() => onBuffer()}
          onError={() => onVideoError()}
          paused={isPaused}
          poster={autoPlay.vertical_thumbnail_url}
          posterResizeMode="stretch"
          resizeMode="cover"
          style={{
            height: 200,
          }} />
      </TouchableOpacity>

      <Text style={styles.title}>{autoPlay.title}</Text>
      <Text style={styles.subText}>{constants.AUTOPLAY_SUBTEXT}</Text>
    </SafeAreaView>
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
