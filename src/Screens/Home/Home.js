import React, { useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

import { getHomeWidgetFeeds } from '../../store/homeFeed/selector'
import { fetchHomeFeed } from '../../store/homeFeed/action';
import Colors from '../../theme/Color';
import Constants from '../../utils/constants';

/** 
 * Here added components for Horizontal scroll list, Vertical scroll list, Auto play, 
 * Rounded icon and Spot light image
 */
import SpotLight from '../../components/SpotLight/SpotLight';
import HorizontalListLayout from '../../components/HorizontalListLayout/HorizontalListLayout';
import VerticalListLayout from '../../components/VerticalListLayout/verticalListLayout';
import IconList from '../../components/IconList/IconList';
import AutoPlay from '../../components/AutoPlay/AutoPlay';
import ListFoodItem from '../ListFoodItem/ListFoodItem';

const HomeStack = createStackNavigator();

export default HomeStackScreen = () => {
  return (
    <HomeStack.Navigator nav>
      <HomeStack.Screen name="Cookd" component={Home} />
      <HomeStack.Screen name="Snacks during Binge Watch" component={ListFoodItem} />
    </HomeStack.Navigator>
  );
}

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const homeWidgetFeedList = useSelector(getHomeWidgetFeeds);
  useEffect(() => {
    dispatch(fetchHomeFeed());
  }, [dispatch]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.APP_BACKGROUND_COLOR }}
    >
      <SafeAreaView>
        {homeWidgetFeedList ? (
          homeWidgetFeedList.map((homeWidgetFeed, index) => {
            return (
              <View key={index} >
                { Object.keys(homeWidgetFeed)[0] === Constants.SPOTLIGHT &&
                  <SpotLight navigation={navigation} spotLight={homeWidgetFeed.Spotlight}></SpotLight>
                }
                { Object.keys(homeWidgetFeed)[0] === Constants.HORIZONTAL_SCROLL &&
                  <HorizontalListLayout navigation={navigation} title={homeWidgetFeed.HorizontalScroll.title} recipes={homeWidgetFeed.HorizontalScroll.recipes}></HorizontalListLayout>
                }
                { Object.keys(homeWidgetFeed)[0] === Constants.ICON_ROW &&
                  <IconList iconType={homeWidgetFeed.IconRow.icon_type} iconData={homeWidgetFeed.IconRow.icon_data}></IconList>
                }
                { Object.keys(homeWidgetFeed)[0] === Constants.AUTOPLAY &&
                  <AutoPlay autoPlay={homeWidgetFeed.Autoplay}></AutoPlay>
                }
                { Object.keys(homeWidgetFeed)[0] === Constants.VERTICAL_LIST &&
                  <VerticalListLayout navigation={navigation} verticalList={homeWidgetFeed.VerticalList}></VerticalListLayout>
                }
              </View>
            )
          }))
          : <Text>No data found</Text>}
      </SafeAreaView>
    </ScrollView>
  );
};
