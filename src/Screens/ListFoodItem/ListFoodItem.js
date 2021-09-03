import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilterCategoryList } from '../../store/homeFeed/action';
import { getCategoryList } from '../../store/homeFeed/selector';
import FastImage from 'react-native-fast-image'
import constants from '../../utils/constants';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.square_thumbnail_url,
        }}
        style={styles.itemPhoto}
        resizeMode="stretch"
      />
      <FastImage
        source={{
          uri: `${item.square_thumbnail_url}?auto=compress`,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <Text style={styles.itemText}>{item.title}</Text>
      <Text style={styles.subText}>{constants.COOK_TIME}: {item.total_cooking_time} {constants.MIN}</Text>
    </View>
  );
};

/**
 * This page is used as temporary page for view the list of food items
 */
const ListFoodItem = () => {

  const dispatch = useDispatch();
  const categoryList = useSelector(getCategoryList);
  useEffect(() => {
    dispatch(fetchFilterCategoryList());
  }, [dispatch]);

  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-around' }}
      data={categoryList}
      renderItem={({ item }) => <ListItem item={item} />}
      showsHorizontalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "space-around"
  },
  item: {
    marginVertical: 10,
  },
  itemPhoto: {
    height: 160,
    width: 160,
    borderRadius: 20
  },
  itemText: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
  },
  subText: {
    color: 'grey',
  },
  spotItemPhoto: {
    width: '100%',
    height: 200,
  },
});

export default ListFoodItem;