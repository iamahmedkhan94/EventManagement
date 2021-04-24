import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Button, Icon} from 'react-native-elements';
import styles from './styles';
import EventsList from './EventsList/eventsList';
import {FlatList} from 'react-native-gesture-handler';
import {Data1} from '../../../dummyData/dummyData';

import {useDispatch, useSelector} from 'react-redux';

function EventsCalender(props: any) {
  const {eventList} = useSelector((state: any) => state.events);
  const [pressedDate, setPressedDate] = useState<string>('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {/* <View style={{flex:0.01}} ></View> */}
        <View style={styles.buttonCOntainer}>
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
            title="Create Event"
            onPress={() => props.navigation.navigate('CreateEvent')}
          />
        </View>

        <View style={{flex: 0.45}}>
          <Calendar
            // Initially visible month. Default = Date()
            current={'2021-04-01'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={new Date()}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2025-05-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
              setPressedDate(day.dateString);
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              console.log('selected day', day);
            }}
          />
        </View>
        <View style={{flex: 0.13}}></View>

        <View style={styles.eventList}>
          {eventList !== null && eventList !== undefined ? (
            <FlatList
              data={eventList.filter(e => e.date == pressedDate)}
              renderItem={({item}) => (
                <EventsList
                  type={item.name}
                  description={item.description}
                  date={item.date}
                  title={item.title}></EventsList>
              )}></FlatList>
          ) : (
            <Text>No events at the selected date</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
export default EventsCalender;
