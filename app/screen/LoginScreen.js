import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, AsyncStorage, ActivityIndicator, ScrollView } from "react-native";
import { Container, Card, CardItem, Item, Content, Button, Icon, Body, Input } from 'native-base'
import axios from 'axios'
import ip from '../config'
import IconM from 'react-native-vector-icons/Ionicons'

class LoginScreen extends React.Component {

  state = {
    isLogin: true,
    isLoading: false,
    name: '',
    nick: '',
    email: '',
    password: '',
    app_id: '07d03c16-6f65-4330-8bad-4194b81483cb'
  }

  loginRegister = () => {
    this.setState({ isLoading: true })
    if (this.state.isLogin) {
      axios.post(`${ip}/login`,
        {
          email: this.state.email,
          password: this.state.password,
          app_id: this.state.app_id
        }
      ).then((response) => {
        try {
     
          AsyncStorage.setItem('token', response.data.token).then(() => {
            this.setState({ isLoading: false })
            this.props.navigation.push('Home')
          })
     
        } catch (error) {
     
          this.setState({ isLoading: false })
          alert(error)
     
        }

      }).catch((error) => {

        alert('Username & Password Salah')
        this.setState({ isLoading: false })
     
      })

    } else {

      axios.post(`${ip}/register`,
        {
          email: this.state.email,
          password: this.state.password,
          app_id: this.state.app_id,
          username: this.state.nick,
          name: this.state.name
        }
      ).then((response) => {

        alert('Pendaftaran Berhasil Silahkan Login Untuk Melanjutkan')
        this.setState({ isLoading: false })

      }).catch((error) => {

        alert('Username & Password Salah')
        this.setState({ isLoading: false })

      })
    }
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />


        <ImageBackground  source={require('../image/bg2.jpg')} style={styles.backgroundImage}>

          <View>
         
                    {/* <Text style={{ fontFamily: 'Roboto', fontSize: 12, fontWeight: 'bold' }}>{this.state.isLogin ? 'Welcome To  ANIMEFLIX !' : 'Join With Us !'}</Text> */}
              
                  <Image style={{ width: 130, height: 130, marginLeft:10,marginTop:50, alignSelf: 'flex-start' }} source={require('../image/edit.png')} />

                  
            <View style={{ backgroundColor: 'transparent', width: 300, height: this.state.isLogin ? 380 : 450 }}>

            <Text style={{color:'#e84393', fontFamily:'Roboto', fontSize:25, alignSelf:'flex-start'}}>{this.state.isLogin ? 'Welcome Back,' : 'Join With Us !'}</Text>
            <Text style={{color:'#e84393', fontFamily:'Roboto', fontSize:15, alignSelf:'flex-start'}}>{this.state.isLogin ? 'Sign in to continue' : 'Sign out to continue'}</Text>
              <View style={{marginTop:-20, backgroundColor:'transparent',height: this.state.isLogin ? 380 : 450, borderRadius: 10 }} >

                <Body style={{ justifyContent: 'center' }}>
                  

                  {this.state.isLogin ||

                  <Item style={{marginBottom:5, backgroundColor: 'rgba(0,0,0,0.2)',color:'transparent', borderColor:'transparent'}} rounded>
                      <IconM style={{marginLeft:10}} size={25} color='#9E005D' active name='md-person' />
                      <Input placeholder='Name' onChangeText={(name) => this.setState({ name })} />
                    </Item>

                  }

                  {
                    this.state.isLogin ||
                    <Item style={{marginBottom:5, backgroundColor: 'rgba(0,0,0,0.2)',color:'transparent', borderColor:'transparent'}} rounded>
                      <IconM style={{marginLeft:10}} size={25} color='#9E005D' active name='md-person' />
                      <Input placeholder='Nickname' onChangeText={(nick) => this.setState({ nick })} />
                    </Item>
                  }

                  <Item style={{marginBottom:5,backgroundColor: 'rgba(0,0,0,0.2)',color:'transparent', borderColor:'transparent'}} rounded>
                    <IconM style={{marginLeft:10}} size={25} color='#9E005D' active name='ios-mail' />
                    <Input style={{width:320}} placeholder='Email' onChangeText={(email) => this.setState({ email })} />
                  </Item>
                  <Item style={{backgroundColor: 'rgba(0,0,0,0.2)',color:'transparent', borderColor:'transparent'}} rounded>
                    <IconM style={{marginLeft:10}} size={25} color='#9E005D' active name='md-key' />
                    <Input style={{width:320}} placeholder='Password' secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
                  </Item>


                  <Button style={{ width: 300, borderColor: '#e84393', marginTop: 10, justifyContent: 'center', backgroundColor: '#e84393', borderRadius: 20 }} bordered onPress={this.loginRegister} >
                    {this.state.isLoading ? <ActivityIndicator /> :
                      <Text style={{color:'#fff', alignSelf: "center" }}>{this.state.isLogin ? 'Login' : "Create New"}</Text>}
                  </Button>

                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <View style={{ backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 12 }}>OR</Text>
                    <View style={{ backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center' }} />
                  </View>
                  <Button onPress={() => this.setState({ isLogin: !this.state.isLogin })} style={{ width: 300, borderColor: '#e84393', marginTop: 5, justifyContent: 'center', backgroundColor: '#e84393', borderRadius: 20 }} bordered >
                    <Text style={{color:'#fff', alignSelf: "center" }}>{this.state.isLogin ? "Create An Account" : "Already have an Account?"} </Text>
                  </Button>
                </Body>
              </View>
            </View>
          </View>

        </ImageBackground>
      </Container >

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
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
    resizeMode: 'cover'
  }

});
export default LoginScreen;