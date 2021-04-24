import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from 'react-native-elements';

import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../RootStackParams';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from '../MainBottomTabParams';
import styles from './styles';
import EventsList from './EventsList/eventsList';
import {FlatList} from 'react-native-gesture-handler';
import {Data1} from '../../../dummyData/dummyData';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
type HomeScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'EventsListing'>
>;

function EventsListing() {
  const navigation = useNavigation<HomeScreenProp>();
  //   const dispatch = useDispatch();
  const {eventList} = useSelector((state: any) => state.events);
  console.log('Data1', Data1);
  const [listData, setListData] = useState<any>(Data1);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 0.04}}></View>
        <View style={styles.buttonCOntainer}>
          <Button
            title="Event Type Filter"
            buttonStyle={styles.buttonStyle}
            iconRight
            icon={
              <Icon
                name="keyboard-arrow-down"
                type="material"
                size={25}
                color="white"
                style={{
                  marginLeft: 5,
                }}></Icon>
            }></Button>
          <Button
            buttonStyle={styles.buttonStyle}
            icon={
              <Icon
                name="add"
                type="material"
                size={15}
                color="white"
                style={{
                  marginRight: 5,
                }}
              />
            }
            onPress={() => navigation.navigate('CreateEvent')}
            title="Create Event"
          />
        </View>
        <View style={styles.eventList}>
          <FlatList
            data={eventList}
            renderItem={({item}) => (
              <EventsList
                type={item.type}
                description={item.description}
                date={item.date}
                title={item.name}></EventsList>
            )}></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default EventsListing;
