import React from 'react';
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
            current={'2012-03-01'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2012-05-10'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2012-05-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
              console.log('selected day', day);
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              console.log('selected day', day);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            // Hide month navigation arrows. Default = false
            hideArrows={true}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={true}
            // Show week numbers to the left. Default = false
            showWeekNumbers={true}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={true}
            // Disable right arrow. Default = false
            disableArrowRight={true}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            // Replace default month and year title with custom one. the function receive a date as parameter.

            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
          />
        </View>
        <View style={{flex: 0.13}}></View>

        <View style={styles.eventList}>
          <FlatList
            data={eventList}
            renderItem={({item}) => (
              <EventsList
                type={item.name}
                description={item.description}
                date={item.date}
                title={item.title}></EventsList>
            )}></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default EventsCalender;
