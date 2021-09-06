import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Colors from '../../theme/Color';

let reference = null;

const onBuffer = () => {
  console.log('video buffered---');
}

const onVideoError = () => {
  console.log('Error while playing video');
}

/**
 * To display video component, automtically starts video while focus 
 * @param {*} param which contains autoPlay video url and title 
 */
export default function AutoPlay({ autoPlay }) {
  const data = [];
  data.push(autoPlay);
  const [isPaused, setIsPaused] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const onViewRef = React.useRef((viewableItems) => {
    if (viewableItems.viewableItems && viewableItems.viewableItems.length > 0) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => setIsMuted(!isMuted)}>
            <Video source={{ uri: item.recipe_lite.streaming_url }}
              ref={(ref) => {
                reference = ref
              }}
              onBuffer={() => onBuffer()}
              onError={() => onVideoError()}
              paused={isPaused}
              muted={isMuted}
              poster={`${item.vertical_thumbnail_url}?auto=compress`}
              posterResizeMode="stretch"
              resizeMode="cover"
              style={{
                height: 200,
              }} />
          </TouchableOpacity>
        }
      />
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
