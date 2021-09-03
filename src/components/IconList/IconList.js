import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import Colors from '../../theme/Color';
import BasicStyle from '../../theme/Basic';
import FastImage from 'react-native-fast-image'

const ListItem = ({ item, onClick }) => {
  return (
    <View style={{ marginBottom: 10, marginTop: 20 }}>
      <Pressable onPress={() => onClick(item.name)}>
        <FastImage
          style={styles.roundedImg}
          source={{
            uri: item.image_url,
            priority: FastImage.priority.high,
          }}

        />
        <Text style={styles.foodItemTitle}>{item.name}</Text>
      </Pressable>
    </View>
  );
};

/**
 * To display rounded icons as sections
 * @param { *} param contains icon image url and title 
 */
const IconList = ({ iconType, iconData, onClick }) => {
  return (
    <View style={styles.container}>
      <Text style={BasicStyle.sectionTitle}>{iconType}</Text>
      <FlatList
        numColumns={Math.round(BasicStyle.devDimens.width / 100)}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={iconData}
        renderItem={({ item }) => <ListItem item={item} onClick={onClick} />}
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
  },
  foodItemTitle: {
    color: Colors.BLACK,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5
  }
});

export default IconList;