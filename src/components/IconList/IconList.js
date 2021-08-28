import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import Colors from '../../theme/Color';
import BasicStyle from '../../theme/Basic';

const ListItem = ({ item }) => {
  return (
    <View style={{ marginBottom: 10, marginTop: 20 }}>
      <Image
        source={{
          uri: item.image_url,
        }}
        style={styles.roundedImg}></Image>
      <Text style={styles.foodItemTitle}>{item.name}</Text>
    </View>
  );
};

/**
 * To display rounded icons as sections
 * @param { *} param contains icon image url and title 
 */
const IconList = ({ iconType, iconData }) => {
  return (
    <View style={styles.container}>
      <Text style={BasicStyle.sectionTitle}>{iconType}</Text>
      <FlatList
        contentContainerStyle={BasicStyle.wrapItem}
        data={iconData}
        renderItem={({ item }) => <ListItem item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: Colors.WHITE
  },
  roundedImg: {
    width: 75,
    height: 75,
    borderRadius: 75,
    marginRight: 10
  },
  foodItemTitle: {
    color: Colors.BLACK,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5
  }
});

export default IconList;