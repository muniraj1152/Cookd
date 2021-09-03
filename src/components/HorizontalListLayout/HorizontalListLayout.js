import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  Pressable
} from 'react-native';

import FastImage from 'react-native-fast-image'
import constants from '../../utils/constants';

const ListItem = ({ item }) => {
  return (
    <View style={{ margin: 5 }}>
      <FastImage
        style={styles.itemPhoto}
        source={{
          uri: `${item.vertical_thumbnail_url}?auto=compress`,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
};

export default (props) => {
  const { navigation, title, recipes } = props;
  const sections = [{ title, data: recipes }];
  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 10
    }}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={sections}
          renderSectionHeader={({ section }) => (
            <>
              <View style={styles.sectionHeader} >
                <Text style={styles.sectionHeaderTitle}>{section.title}</Text>
                <Pressable onPress={() => navigation.navigate(constants.NAVIGATION_HEADER_TITLE, {})}>
                  <View style={{ flexDirection: 'row', textAlign: 'left', fontSize: 15, paddingRight: 10 }}>
                    <Text style={styles.moreOption}>{constants.EXPLORE_MORE}</Text>
                    <Image source={require('../../assets/arrow_left.png')} style={{ width: 20, height: 20 }} />
                  </View>
                </Pressable>
              </View>
              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}
          renderItem={({ item }) => {
            return null;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'space-between', flexDirection: 'row'
  },
  sectionHeaderTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000000',
  },
  moreOption: {
    fontWeight: '600',
    fontSize: 12,
    color: '#FF8C00',
    paddingRight: 10,
    alignSelf: "center"
  },
  itemPhoto: {
    width: 150,
    height: 220,
    borderRadius: 10
  },
  itemText: {
    color: '#000000',
    fontWeight: '500',
    marginTop: 5,
    fontSize: 12
  },
});

