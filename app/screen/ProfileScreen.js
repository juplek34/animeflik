import React, { Component } from "react"
import { Text, View, Image, TouchableOpacity, AsyncStorage, ActivityIndicator } from "react-native"
import { Container, Content, Card, Icon, ListItem, Item, Body, SwipeRow, Button } from "native-base"
import Star from 'react-native-star-view'
import deviceStorage from '../deviceStorage'
import { connect } from 'react-redux'
import { GET_FAVORIT } from "../actions/video";

class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isLoading: false
    }
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      this.props.dispatch(GET_FAVORIT(token))
      this.setState({ isLogin: true })
    } else {
      this.setState({ isLogin: false })
    }
  }

  loginLogout = async () => {
    this.setState({ isLoading: true })
    if (this.state.isLogin) {
      await AsyncStorage.removeItem('token').then(() =>
        this.props.navigation.push('Home'),
        this.setState({ isLoading: false })
      )
    } else {
      this.setState({ isLoading: false })
      this.props.navigation.navigate('LoginScreen')
    }
  }

  render() {
    console.log(this.props.favorite.results)
    return (
      <Container>
        <Content style={{ marginTop: 30 }}>
          {/* <View style={{ alignItems: "center", marginTop: 60 }}>
            <Card
              style={{
                height: null,
                width: 300,
                shadowRadius: { width: 50, height: 50 }
              }}
            >
              {this.state.isLogin &&
                <View>
                  <View
                    style={{
                      backgroundColor: "white",
                      borderWidth: 3,
                      borderColor: "#D8368C",
                      width: 110,
                      height: 110,
                      borderRadius: 150 / 2,
                      marginTop: -50,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center"
                    }}
                  >
                    <Icon
                      name="md-person"
                      style={{ fontSize: 70, color: "#D8368C" }}
                    />

                  </View>
                  <View style={{ paddingRight: 16 }}>
                    <ListItem>
                      <Body>
                        <Text
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "Roboto-Bold"
                          }}
                        >
                          Name
                    </Text>
                        <Text
                          style={{ color: "grey", fontFamily: "Roboto-Medium" }}
                        >
                          Michael Jackson
                    </Text>
                      </Body>
                    </ListItem>
                    <ListItem>
                      <Body>
                        <Text
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "Roboto-Bold"
                          }}
                        >
                          Email
                    </Text>
                        <Text
                          style={{ color: "grey", fontFamily: "Roboto-Medium" }}
                        >
                          jackson@gmail.com
                    </Text>
                      </Body>
                    </ListItem>
                  </View>

                </View>
              }
              {this.state.isLogin ||

                <Text note
                  style={{
                    fontFamily: "Roboto-Medium",
                    margin: 10,
                  }}
                >
                  Silahkan Login Untuk Dapat Menambahkan Ke List Favorite Dan Mendapatkan Update Terkini
              </Text>
              }
              <TouchableOpacity onPress={this.loginLogout}>
                <View
                  style={{
                    justifyContent: "flex-end",
                    flex: 1,
                    marginBottom: 20
                  }}
                >

                  <View
                    style={{
                      marginTop: 20,
                      width: 250,
                      height: 40,
                      backgroundColor: this.state.isLogin ? "red" : "green",
                      alignSelf: "center",
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    {this.state.isLoading ? <ActivityIndicator /> :
                      <Text
                        style={{
                          fontFamily: "Roboto-Medium",
                          fontSize: 16,
                          color: "white"
                        }}
                      >
                        {this.state.isLogin ? "Logout" : "Login"}
                      </Text>}
                  </View>
                </View>
              </TouchableOpacity>
            </Card> 
          </View> */}

          {this.state.isLogin &&
            <View>
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 18,
                  marginLeft: 20,
                  color: 'black'
                }}
              >
                Favorite
            </Text>


              <SwipeRow
                rightOpenValue={-75}
                body={
                  <View style={{ flexDirection: 'row' }}>
                    <View>
                      <Image source={require('../assets/img/1.jpg')} style={{ height: 90, width: 70, marginLeft: 20 }} />
                    </View>
                    <View style={{ height: 90, marginLeft: 10, justifyContent: 'center' }}>
                      <View>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 16, }}>
                          {this.props.favorite.results.name_series}
                        </Text>
                      </View>
                      <Star score={3} style={{ width: 90, height: 20, marginTop: 10 }} />

                    </View>
                  </View>
                }
                right={
                  <Button danger onPress={() => alert('Trash')}>
                    <Icon active name="trash" />
                  </Button>
                }
              />

            </View>
          }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  favorite: state.favoriteReducers
})


export default connect(mapStateToProps)(ProfileScreen)