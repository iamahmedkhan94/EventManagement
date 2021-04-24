import {useNavigation} from '@react-navigation/native';
import React,{FC} from 'react';
import {View, Text} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import MoreData,{Data1} from '../../../../dummyData/dummyData'

const EventsList : FC<MoreData> = (props) =>{

    return(
<View style={{backgroundColor:'white', elevation:3, width: '95%', height: 130, marginBottom:10, borderRadius:5}} >
   <View style={{flexDirection:'row', justifyContent:'space-between', margin:15}} >
   <Text>{props.title}</Text>
   <View style={{flexDirection:'row'}} >
   <Icon name="delete" type="antdesign" ></Icon>
   <Icon name="edit" type="material" ></Icon>
   </View>

   </View>
   
    <Text>{props.description}</Text>
    <Text>{props.date}</Text>
    <Text>View Attachment</Text>
</View>
    )
}
export default EventsList;