import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, ImageBackground, StatusBar, Image } from "react-native";
import { Container, Card, CardItem, Item, Content, Button, Icon, Body, Input } from 'native-base'
import { StackNavigator } from "react-navigation";


class RegisterScreen extends React.Component {

  state = {
    name: '',
    username: '',
    email: '',
    password: '',
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />


        <ImageBackground blurRadius={1} source={require('../image/login.jpg')} style={styles.backgroundImage}>

          <View>
            <Card style={{ backgroundColor: 'transparent', width: 300, height: 530, borderRadius: 10 }}>

              <CardItem style={{ height: 430, borderRadius: 10 }} >

                <Body style={{ justifyContent: 'center' }}>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 12, fontWeight: 'bold' }}>Join With Us !</Text>
                  </View>
                  <Image style={{ width: 100, height: 100, alignSelf: 'center' }} source={require('../image/edit.png')} />

                  <Item>
                    <Input placeholder='Name' />
                  </Item>

                  <Item>
                    <Input placeholder='Nickname' />
                  </Item>

                  <Item>
                    <Input placeholder='Email' />
                  </Item>
                  <Item>
                    <Input placeholder='Password' />
                  </Item>

                  <Button style={{ width: 270, borderColor: '#e84393', marginTop: 20, justifyContent: 'center', backgroundColor: '#fff', borderRadius: 20 }} bordered >
                    <Text style={{ alignSelf: "center" }}>Create New</Text>
                  </Button>
                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <View style={{ backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 12 }}>
                      OR
                </Text>
                    <View style={{ backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center' }} />
                  </View>

                  <Button onPress={() => this.props.navigation.navigate('LoginScreen')} style={{ width: 270, borderColor: '#e84393', marginTop: 5, justifyContent: 'center', backgroundColor: '#fff', borderRadius: 20 }} bordered >
                    <Text style={{ alignSelf: "center" }}>Already have an Account?</Text>
                  </Button>
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
export default RegisterScreen;