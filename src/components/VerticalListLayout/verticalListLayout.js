import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.square_thumbnail_url,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <View style={{
        justifyContent: 'center', paddingLeft: 10,
        flex: 1
      }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>{item.title}</Text>
        <Text style={{ fontSize: 10, color: 'grey' }}>Cook time: {item.total_cooking_time} Min</Text>
      </View>
    </View>
  );
};

export default ({ verticalList, navigation }) => {
  const sections = verticalList.map((item) => {
    return { title: item.title, data: item.recipes, horizontal: true }
  });
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={sections}
          renderSectionHeader={({ section }) => (
            <>
              <View>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                <Text style={styles.viewAll} onPress={() => navigation.navigate('Snacks during Binge Watch', {})}>View All</Text>
                {section.horizontal ? (
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : null}
              </View>
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeader: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000000',
    marginTop: 20,
    marginBottom: 5,
    paddingLeft: 10
  },
  item: {
    margin: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    textAlign: 'left',
    width: 300,
    borderRadius: 12
  },
  itemPhoto: {
    width: 80,
    height: 80,
    borderRadius: 8
  },
  itemText: {
    color: '#000000',
    marginTop: 5,
  },
  viewAll: {
    fontWeight: '600',
    fontSize: 12,
    color: '#FF8C00',
    paddingRight: 10,
    paddingLeft: 10
  }
});