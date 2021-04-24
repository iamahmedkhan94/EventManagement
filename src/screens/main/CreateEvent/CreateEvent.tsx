import React, {useState} from 'react';
import {View, Text, Platform, TouchableOpacity, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextInput from '../../../components/input';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button} from 'react-native-elements';
import moment from 'moment';
import {Data1} from '../../../dummyData/dummyData';
import {useDispatch, useSelector} from 'react-redux';
import {addRequest} from '../../../redux/actions';
import DropDownPicker from 'react-native-dropdown-picker';

function CreateEvents(props: any) {
  const dispatch = useDispatch();
  const {eventList} = useSelector((state: any) => state.events);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [dateToString, setDateToString] = useState<string>('');
  const [startTimeToString, setStartTimeToString] = useState<string>('');
  const [endTimeToString, setEndTimeToString] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date(1598051730000));
  const [time, setTime] = useState<Date>(new Date(1598051730000));
  const [timeEnd, setTimeEnd] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState<boolean>(false);
  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const [show3, setShow3] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState<boolean>(
    false,
  );
  const [showEndTimePicker, setShowEndTimePicker] = useState<boolean>(false);
  const [eventType, setEventType] = useState<string>('');

  const onChange = (event: object, selectedDate: Date | undefined) => {
    console.log('selectedDate', selectedDate);

    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow1(true);
    setShowDatePicker(false);
    setDateToString(moment(currentDate).format('YYYY-MM-DD'));
  };
  const onChangeStartTime = (event: object, selectedDate: any) => {
    console.log('selectedDate', selectedDate);

    const currentDate = selectedDate || date;
    setTime(currentDate);
    setShow2(true);
    setShowStartTimePicker(false);
    setStartTimeToString(moment(currentDate).format('h:mm a'));
  };
  const onChangeEndTime = (event: object, selectedDate: any) => {
    console.log('selectedDate', selectedDate);

    const currentDate = selectedDate || date;
    setTimeEnd(currentDate);
    setShow3(true);
    setShowEndTimePicker(false);
    setEndTimeToString(moment(currentDate).format('h:mm a'));
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const _createEvent = () => {
    if (name == '' || date == null || eventType == '') {
      return Alert.alert('Please fill the required fields');
    }
    dispatch(
      addRequest(
        name,
        description,
        moment(date).format('YYYY-MM-DD'),
        eventType,
        props.navigation,
      ),
    );
    // let obj = {
    //   title: name,
    //   description: description,
    //   date: moment(date).format('MM/DD/YYYY'),
    //   type: 'office',
    // };
    // Data1.push(obj);
    // props.navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 0.04}}></View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            placeholder={'Name'}
            onChangeText={val => setName(val)}
            value={name}
            inputContainerStyle={styles.inputContainerStyle}></TextInput>
        </View>
        <View style={{flex: 0.02}}></View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            placeholder={'Description'}
            onChangeText={val => setDescription(val)}
            value={description}
            inputContainerStyle={styles.inputContainerStyle1}></TextInput>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              // borderBottomWidth: 0.4,
              flexDirection: 'row',

              // marginLeft: 10,
              // height: hp(7),
              backgroundColor: 'white',
              borderRadius: 5,
              width: '85%',
              height: 50,
              marginLeft: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              elevation: 3,
              marginRight: 10,
              // justifyContent: 'center',

              // width: wp(35),
            }}
            onPress={() => setShowDatePicker(true)}>
            {show1 !== true ? (
              <Text style={{paddingLeft: 5}}>Date</Text>
            ) : (
              <Text style={{paddingLeft: 5}}>
                {/* {moment(dateToString).format('MM/DD/YYYY')} */}
                {dateToString}
              </Text>
            )}
            {/* <Image source={Images.calender} style={{marginRight: 10}} /> */}
          </TouchableOpacity>
        </View>

        {showDatePicker !== false ? (
          <DateTimePicker
            //   testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
            minimumDate={new Date()}
          />
        ) : null}
        <View style={{flex: 0.04}}></View>
        <View style={styles.timeSlots}>
          <TouchableOpacity
            style={styles.endTimeStyle}
            onPress={() => setShowStartTimePicker(true)}>
            {show2 !== true ? (
              <Text style={{paddingLeft: 5}}>Start Time</Text>
            ) : (
              <Text style={{paddingLeft: 5}}>
                {/* {moment(dateToString).format('MM/DD/YYYY')} */}
                {startTimeToString}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.endTimeStyle}
            onPress={() => setShowEndTimePicker(true)}>
            {show3 !== true ? (
              <Text style={{paddingLeft: 5}}>End Time</Text>
            ) : (
              <Text style={{paddingLeft: 5}}>
                {/* {moment(dateToString).format('MM/DD/YYYY')} */}
                {endTimeToString}
              </Text>
            )}
          </TouchableOpacity>
        </View>
        {showStartTimePicker !== false ? (
          <DateTimePicker
            //   testID="dateTimePicker"
            value={time}
            mode={'time'}
            is24Hour={true}
            display="default"
            onChange={onChangeStartTime}
          />
        ) : null}
        {showEndTimePicker !== false ? (
          <DateTimePicker
            //   testID="dateTimePicker"
            value={timeEnd}
            mode={'time'}
            is24Hour={true}
            display="default"
            onChange={onChangeEndTime}
          />
        ) : null}
        <View style={{flex: 0.06}}></View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.attachmentButtonStyle}>
            <Text style={{paddingLeft: 5}}>Attachment (Optional)</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.06}}></View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <DropDownPicker
            placeholder="Select Type"
            items={[
              {label: 'Event', value: 'event'},
              {label: 'Out of Office', value: 'out of office'},
              {label: 'Task', value: 'task'},
            ]}
            defaultValue={eventType}
            containerStyle={{height: 50, width: '60%'}}
            style={{backgroundColor: '#fafafa', width: '100%'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setEventType(item.value)}
          />
        </View>
        <View style={{flex: 0.4}}></View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Button
            title="Create Event"
            buttonStyle={styles.buttonStyle1}
            titleStyle={styles.titleStyle}
            onPress={_createEvent}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default CreateEvents;
