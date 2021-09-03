import React, { useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
  VirtualizedList
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

import { getHomeWidgetFeeds, isError } from '../../store/homeFeed/selector'
import { fetchHomeFeed } from '../../store/homeFeed/action';
import Constants from '../../utils/constants';

/** 
 * Here added components for Horizontal scroll list, Vertical scroll list, Auto play, 
 * Rounded icon and Spot light image
 */
import { SpotLight } from '../../components/SpotLight/SpotLight';
import HorizontalListLayout from '../../components/HorizontalListLayout/HorizontalListLayout';
import VerticalListLayout from '../../components/VerticalListLayout/verticalListLayout';
import IconList from '../../components/IconList/IconList';
import AutoPlay from '../../components/AutoPlay/AutoPlay';
import ListFoodItem from '../ListFoodItem/ListFoodItem';

const HomeStack = createStackNavigator();

export default HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Cookd" component={Home} />
      <HomeStack.Screen name="Snacks during Binge Watch" component={ListFoodItem} />
    </HomeStack.Navigator>
  );
}

const getItemCount = (data) => data.length;

const getItem = (data, index) => {
  const item = {
    title: Object.keys(data[index])[0],
    id: index,
    value: data[index][Object.keys(data[index])[0]]
  };
  return item;
}

const showIconToast = (itemName) => {
  ToastAndroid.show(`${itemName} item clicked`, ToastAndroid.SHORT);
};

const onIconClick = (itemName) => {
  showIconToast(itemName);
}

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const homeWidgetFeedList = useSelector(getHomeWidgetFeeds);
  const error = useSelector(isError);
  useEffect(() => {
    dispatch(fetchHomeFeed());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <VirtualizedList
        data={homeWidgetFeedList}
        getItemCount={getItemCount}
        getItem={getItem}
        initialNumToRender={30}
        renderItem={({ item }) =>
          !error ? (
            <View key={item.id} >
              {item.title === Constants.SPOTLIGHT &&
                <SpotLight navigation={navigation} spotLight={item.value}></SpotLight>
              }
              {item.title === Constants.HORIZONTAL_SCROLL &&
                <HorizontalListLayout navigation={navigation} title={item.value.title} recipes={item.value.recipes}></HorizontalListLayout>
              }
              {item.title === Constants.ICON_ROW &&
                <IconList iconType={item.value.icon_type} iconData={item.value.icon_data} onClick={onIconClick}></IconList>
              }
              {item.title === Constants.AUTOPLAY &&
                <AutoPlay autoPlay={item.value}></AutoPlay>
              }
              {item.title === Constants.VERTICAL_LIST &&
                <VerticalListLayout navigation={navigation} verticalList={item.value}></VerticalListLayout>
              }
            </View>
          ) : (
              <Text>Error while getting items. Please try again later</Text>
            )
        }
      />
    </SafeAreaView>
  );
};
