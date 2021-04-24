import { StyleSheet , Platform} from "react-native";


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonCOntainer:{
    flex: 0.1, flexDirection:'row', justifyContent:'space-around', alignItems:'center'
  },
  buttonStyle:{
    // width: '80%'
  },
  eventList:{
    flex: 0.86,
margin:20,
marginRight:5
  }


})

export default styles;