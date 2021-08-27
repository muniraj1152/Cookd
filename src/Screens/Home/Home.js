import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {styles} from './Home.styles';
import { fetchHomeFeed } from '../../store/homeFeed/action';
import { getFeeds } from '../../store/homeFeed/selector';


const Home = () => {
    const dispatch = useDispatch();

    const feeds = useSelector(getFeeds);

    const getHomeFeed = () => {
        dispatch(fetchHomeFeed())
    }

    return (
        <View style={styles.container}>
            <Text>Home component</Text>
            {feeds.map((feed, index) => (
            <Text key={feed.id}>
              {feed.id}---- {index}
            </Text>
          ))}
            <Button  color="green"  onPress={() => getHomeFeed()} title="Get Home Feed" />
        </View>
    )
}

export default Home;