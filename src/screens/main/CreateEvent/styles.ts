import { StyleSheet , Platform} from "react-native";


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonCOntainer:{
    flex: 0.1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center',marginRight:20
  },
  buttonStyle:{
    // width: '80%'

  },
  eventList:{
    flex: 0.45,
margin:20,
marginRight:5
  },
  inputContainerStyle:{
    borderBottomWidth:0,
    width: '90%',
    backgroundColor:'white',
    elevation:3
  },
  inputContainerStyle1:{
    borderBottomWidth:0,
    width: '90%',
    height: 80,
    backgroundColor:'white',
    elevation:3
  },
  timeSlots:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  endTimeStyle:{
        
    // borderBottomWidth: 0.4,
    flexDirection: 'row',


    // marginLeft: 10,
    // height: hp(7),
    backgroundColor:'white',
    borderRadius: 5,
    width: '40%',
    height: 50,
    marginLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation:3,
    marginRight:10
    // justifyContent: 'center',

    // width: wp(35),
  
},
attachmentButtonStyle:{
  flexDirection: 'row',


  // marginLeft: 10,
  // height: hp(7),
  backgroundColor:'white',
  borderRadius: 5,
  width: '85%',
  height: 50,
  marginLeft: 10,
  justifyContent: 'space-between',
  alignItems: 'center',
  elevation:3,
  marginRight:10
  // justifyContent: 'center',

  // width: wp(35),
},
buttonStyle1:{
  // width: '85%'
},
titleStyle:{
  textAlign:'center'
}



})

export default styles;