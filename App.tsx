import { View,Text, Platform, StyleSheet } from "react-native";

const App = () =>{
  return(
    <View>
      <Text style={{fontSize:30}}>Plateform : {Platform.OS}</Text>
      {
        Platform.OS=="android" ? 
        <View style={{backgroundColor:'green',height:100,width:100}}></View>
         : 
         <View style={{backgroundColor:'red',height:100,width:100}}></View> 
      }
      <Text style={styles.text}>Hello</Text>
      <Text style={{fontSize:20}}>{JSON.stringify(Platform)}</Text>
      {/* <Text style={{fontSize:20}}>{JSON.stringify(Platform.constants.reactNativeVersion)}</Text> */}
      <Text style={{fontSize:20}}>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
  text:{
    color:Platform.OS == "android" ? 'orange' :'blue',
    fontSize:20
  }
})

export default App;
