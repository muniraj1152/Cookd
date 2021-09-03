import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

import Colors from '../../theme/Color';

/**
 * To display splot light image
 * @param {*} param which contains navigation object and spot light data
 */
export function Spot({ navigation, spotLight }) {

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Snacks during Binge Watch', {})}>
      <Image
        source={{
          uri: spotLight.image_url,
        }}
        style={{ width: '100%', height: 200, borderRadius: 20 }}
        resizeMode="stretch"
      />
      {/* <View style={styles.layerText}>
        <Text style={{ borderColor: 'red', textAlign: 'right', paddingTop: 20, paddingRight: 20 }}> 21 Recipies</Text>
      </View> */}
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 15,
    backgroundColor: Colors.WHITE
  },
  layerText: {
    position: 'absolute',
    backgroundColor: '#1484CD',
    height: '30%',
    left: 15,
    right: 0,
    bottom: 15,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  }
});

const spotLightsPropsAreEqual = (prev, current) => {
  return prev.spotLight.id === current.spotLight.id;
}

export const SpotLight = React.memo(Spot, spotLightsPropsAreEqual);

