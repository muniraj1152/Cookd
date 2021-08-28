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

const ListItem = ({ item }) => {
  return (
    <View style={{ margin: 5 }}>
      <Image
        source={{
          uri: item.square_thumbnail_url,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
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
                <Pressable onPress={() => navigation.navigate('Snacks during Binge Watch', {})}>
                  <View style={{ flexDirection: 'row', textAlign: 'left', fontSize: 15, paddingRight: 10 }}>
                    <Text style={styles.moreOption}>Explore more</Text>
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
    width: 160,
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

