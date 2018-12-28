import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  StatusBar,
  Image,
  Animated,
  TouchableOpacity
} from "react-native";
import {Container, Card,CardItem, Item,Content,Button,Icon, Body,Input} from 'native-base'
import { StackNavigator } from "react-navigation";


export default class WelcomeScreen extends Component {
   
    render() {
       
    return (
      <Container style={{flex:1}}>
          <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />

     
        <ImageBackground blurRadius={1} source={require('../image/login.jpg')} style={styles.backgroundImage}>
        {/* <Animated.View style={[styles.flipcard]} ></Animated.View> */}
       
        <View>
         
        <Card style={{backgroundColor:'transparent', width:300, height:420,borderRadius:10}}>
            <CardItem style={{ height:420,borderRadius:10}} >
            
              <Body style={{justifyContent:'center'}}>
                <View style={{alignSelf:'center'}}>
                <Image style={{width:150, height:50,alignSelf:'center', bottom:30}} source={require('../image/Animeflix(EDITED).png')} />
                </View>
                <View style={{alignSelf:'flex-start'}}>
                    <Text style={{fontSize:35, fontFamily:'sans-serif-thin'}}>Unlock</Text>
                    <Text style={{fontSize:25, fontFamily:'sans-serif-thin'}}>The</Text>
                    <Text style={{fontSize:35, fontFamily:'sans-serif-thin'}}>Full Experience</Text>
                </View>
              
          
          <Button  style={{width:270, borderColor:'#e84393', marginTop:20, justifyContent:'center', backgroundColor:'#fff' , borderRadius:20 }} bordered >
            <Text style={{alignSelf:"center"}}>Login</Text>
          </Button>
          <View style={{flexDirection: 'row', marginTop:5}}>
               <View style={{backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center'}} />
                <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 12 }}>
                OR
                </Text>
                 <View style={{backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center'}} /> 
                 </View>
                 <Button onPress={() => (alert('asd'))} style={{width:270, borderColor:'#e84393', marginTop:5, justifyContent:'center', backgroundColor:'#fff' , borderRadius:20 }} bordered >
            <Text style={{alignSelf:"center"}}>Create An Account</Text>
          </Button>
          <View style={{alignSelf:'center', top:20}}>
                    <Text style={{fontSize:15, fontFamily:'sans-serif-thin'}}>SIGN IN AS A <Text style={{fontWeight:'bold'}}>GUEST</Text></Text>
                </View>
              </Body>
             
              
            </CardItem>
            </Card>

           
         
          </View>
          
               </ImageBackground>
              
               
      </Container>
    
       
    )
  }
}
const iconStyles = {
  size: 100,
  color: "#FFFFFF"
};
const styles = StyleSheet.create({
  // Slide styles
  backgroundImage: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center",
    width: null,
    height: null, // Center horizontally
    resizeMode: 'cover'

}
  // Header styles
  // Text below header
});
