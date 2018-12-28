import React, { Component } from "react";
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Image,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
  Alert
} from 'react-native'
import ListCategory from '../components/ListCategory'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Right, Content, Footer, FooterTab, Header, Icon, Button, Card, CardItem, Left, Body } from 'native-base'
import StarRating from 'react-native-star-rating'
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import IconA from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import axios from 'axios'
import ip from '../config'

import Shimmer from './Shimmer'
import CardFavorite from '../components/CardFavorite'
import { POPULAR, ALL_VIDEOS, USER } from '../actions/video'

const Slider = props => (
  <View style={styles.container}>
    <ImageBackground style={styles.image} source={{ uri: props.uri }}>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <LinearGradient
          colors={["rgba(0,0,0,0)", "#e84393"]}
          style={{ height: 200, width: 300 }}
        >
          <View style={{ justifyContent: "center", flex: 1, marginLeft: 16 }}>
            <Text
              style={{
                fontSize: 22,
                color: "white",
                fontFamily: "OpenSans-Bold"
              }}
            >
              {props.judul}
            </Text>
            <View style={{ width: 120 }}>
              <StarRating
                starSize={10}
                rating={props.item.rating / 2}
                fullStarColor="#ffff8d"
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>
  </View>
);

class NewHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listCategory: [{
        name: 'Action',
        image: require('../assets/img/category1.jpg')
      }, {
        name: 'Adventure',
        image: require('../assets/img/category2.jpg')
      }, {
        name: 'Romance',
        image: require('../assets/img/category3.jpg')
      }, {
        name: 'Fantasy',
        image: require('../assets/img/category4.jpg')
      }, {
        name: 'Horror',
        image: require('../assets/img/category5.jpeg')
      }],
      token: '',
      isLoading: false,
      isLogin: false,
      videos: 5,
      popular: 5
    }
  }

  async componentDidMount() {

    const token = await AsyncStorage.getItem('token')
    this.props.dispatch(POPULAR(this.state.popular))
    this.props.dispatch(ALL_VIDEOS(this.state.videos))

    if (token) {

      this.setState({ isLogin: true })

      const result = await axios.get(ip + '/user/profile', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })

      this.props.dispatch(USER(result.data))

    } else {

      this.setState({ isLogin: false })

    }
  }

  newRelease = item => {
    return (
      <TouchableOpacity
        style={{ justifyContent: "center", alignItems: "center", flex: 1 ,marginRight:10}}
        onPress={() =>
          this.props.navigation.navigate("VideoScreen", {
            slug: item.slug,
            series: item.series
          })
        }
      >
        <View
          style={{
            height: 150,
            width: 150,
            marginLeft: 5,
            marginBottom: 5,
            marginTop: 10,
          }}
        >
          <View style={{ flex: 2, borderRadius: 5 }}>
            <ImageBackground source={{ uri: item.image_url }}
              style={{
                width: 150,
                height: 100,
                resizeMode: "cover",
                flexDirection:'column',
                justifyContent:'flex-end'
              }} imageStyle={{borderRadius:15}}>
              <View style={{height:70,width:150,justifyContent:'center',alignItems:'center'}}>
                <IconA name='play-circle' style={{fontSize:30}} color='#D8368C'/>

              </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 0,
              height:30,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <Text note style={{ color: "#fff" ,fontFamily:'Roboto-Medium',fontWeight:'500',fontSize:12}}>
              Episode {item.episode}
            </Text>
          </View>
            </ImageBackground>
            <View style={{marginTop:5}}>
              <Text style={{ color: "white", fontFamily: "Roboto-Medium",fontWeight:'500',fontSize:12 }}>
                {item.series.length <= 30? item.series : item.series.substring(0,30)+'...'} 
              
              
              
          {/* {item.series.substring(0, 26)}... */}
          {/* {item.series} */}
        </Text>
            </View>


            {/* <Image
              source={{ uri: item.image_url }}
              style={{
                width: 150,
                height: 100,
                resizeMode: "cover",
                borderRadius: 15
              }}
            /> */}
          </View>
         
        </View>
        
      </TouchableOpacity>
    );
  };


  emptyComponent = () => {
    return <FlatList
      keyExtractor={(index) => `index${index}`}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      numColumns={3}
      renderItem={() =>
        <Shimmer
          style={{ height: 180, width: 110, marginRight: 10 }}
          autoRun={true} />
      }
    />
  }

  footerComponent = () => {
    return <FlatList
      keyExtractor={(index) => `index${index}`}
      data={[1, 2, 3]}
      numColumns={3}
      renderItem={() =>
        <Shimmer
          style={{ height: 180, width: 110, marginRight: 10 }}
          autoRun={true} />
      }
    />
  }

  emptynRComponent = () => {
    return <FlatList
      keyExtractor={(index) => `index${index}`}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      numColumns={3}
      renderItem={() =>
        <Shimmer
          style={{ height: 100, width: 110, marginRight: 10 }}
          autoRun={true} />
      }
    />
  }

  footernRComponent = () => {
    return <FlatList
      keyExtractor={(index) => `index${index}`}
      data={[1, 2, 3]}
      numColumns={3}
      renderItem={() =>
        <Shimmer
          style={{ height: 100, width: 110, marginRight: 10 }}
          autoRun={true} />
      }
    />
  }


  handleMoreVideo = () => {

    this.setState({ videos: this.state.videos + 2 })
    this.props.dispatch(ALL_VIDEOS(this.state.videos + 2))


  }

  handleMorePopular = () => {

    this.setState({ popular: this.state.popular + 2 })
    this.props.dispatch(POPULAR(this.state.popular + 2))

  }

  render() {
    return (
      <Container style={{ backgroundColor: "#101010" }}>
        <StatusBar translucent barStyle="default" backgroundColor="#101010" />
        <Content style={{ flex: 1, marginTop: 10 }}>
          <ScrollView scrollEventThrottle={10}>
            <View style={{ flex: 1, backgroundColor: "transparent" }}>
              <Header
                androidStatusBarColor="transparent"
                style={{
                  backgroundColor: "#101010",
                  padding: 0,
                  paddingTop: 10,
                  alignItems: "center"
                }}
              >
                <Left style={{ flex: 1 }}>
                  <Image
                    style={{ width: 110, height: 30 }}
                    source={require("../assets/img/Animeflix(EDITED).png")}
                  />
                </Left>

                <Body style={{ flex: 1, justifyContent: "center" }} />
                {!this.state.isLogin ? (
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <Text
                      style={{
                        color: "#E0E0E0",
                        fontFamily: "Roboto-Medium",
                        fontWeight: "500",
                        fontSize: 16,
                        marginRight: 10
                      }}
                    >
                      Devi
                    </Text>
                    <TouchableOpacity>
                      <IconA
                        name="user-circle-o"
                        style={{ fontSize: 25 }}
                        color="#E0E0E0"
                      />
                      {/* <View style={{width:70,height:30,backgroundColor:'#2980b9',justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:10}}>
                    <Text style={{color:'white',fontSize:12,fontFamily:'Roboto-Medium',fontWeight:'500'}}>
                        Login
                    </Text>

                  </View> */}
                    </TouchableOpacity>
                  </View>
                ) : // <Button transparent small onPress={() => this.props.navigation.navigate('Login')}>
                //   <Text>Login</Text>
                // </Button>
                this.state.isLoading ? (
                  <ActivityIndicator />
                ) : (
                  <Right style={{ flex: 1 }}>
                    {/* <Button transparent small onPress={this.logOut}>
                        <Text style={{ color: 'black', marginRight: 15 }}>{this.props.user.data.name}</Text>
                        <IconA size={23} name='user-o' />
                      </Button> */}
                  </Right>
                )}
              </Header>
              <View
                style={{
                  marginTop: 10,
                  width: "90%",
                  height: 200,
                  backgroundColor: "red",
                  alignSelf: "center",
                  alignItems:'center',
                  justifyContent:'center',
                  borderRadius: 16
                }}
              >
              <Image source={require('../assets/img/category1.jpg')} style={{width:'100%',
                  height: 200,borderRadius: 16}} />
                {/* <Video source={{uri: 'https://cldup.com/vHdglqWDXx.mp4'}}  
              ref={ref => {
                this.player = ref;
              }}                                                      
       onError={alert('Error')}               
       style={{position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,}} /> */}
              </View>
              {/* <Swiper
                autoplay
                height={200}
                showsPagination={false}
                loadMinimal
                style={styles.wrapper}
              // paginationStyle={{
              //   bottom: -20
              // }}
              >{
                  this.props.popular.results.map((item, i) =>

                    <Slider
                      onPress={() => this.props.navigation.navigate('VideoScreen', { series: props.series })}
                      isLoading={this.props.popular.isLoading}
                      item={item}
                      judul={item.series}
                      uri={item.image_url}
                      key={i}
                      style={{ paddingBottom: 10 }}
                    />

                  )
                }

              </Swiper> */}
              <Content padder>
                {/* <View style={{ flexDirection: 'row', marginTop: 15 }}>
                  <Text style={{ alignSelf: 'center', paddingHorizontal: 5, color: '#000', fontFamily: 'Avenir', fontSize: 15 }}>Category</Text>
                  
                </View> */}
                {/* <View style={{ flex: 1, justifyContent: 'center', marginTop: 10, marginRight: 0 }}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {this.state.listCategory.map((item, key) => (
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchScreen', { category: item.name })} key={key}>
                        <ListCategory

                          name={item.name}
                          image={item.image}
                        />
                      </TouchableOpacity>

                    ))}

                  </ScrollView>

                </View> */}
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Text
                    style={{
                      alignSelf: "center",
                      paddingHorizontal: 5,
                      color: "#E0E0E0",
                      fontFamily: "Roboto-Bold",
                      fontSize: 18,
                      fontWeight: "500"
                    }}
                  >
                    New Release
                  </Text>
                </View>

                <FlatList
                  removeClippedSubviews={true}
                  onEndReachedThreshold={.7}
                  onEndReached={this.handleMoreVideo}
                  ListFooterComponent={this.footernRComponent}
                  horizontal={true}
                  data={this.props.allVideo.results}
                  renderItem={({ item }) => this.newRelease(item)}
                  keyExtractor={(item, index) => `item${index}`}
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={this.emptynRComponent}
                />
              </Content>
            </View>
          </ScrollView>

          <Content padder>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  alignSelf: "center",
                  paddingHorizontal: 5,
                  color: "#E0E0E0",
                  fontFamily: "Roboto-Bold",
                  fontSize: 18,
                  fontWeight: "500",
                  marginBottom: 8
                }}
              >
                Most Populer
              </Text>
            </View>

            <FlatList
              onEndReachedThreshold={.7}
              onEndReached={this.handleMorePopular}
              keyExtractor={(item, index) => `index${index}`}
              horizontal={true}
              ListFooterComponent={this.footerComponent}
              data={this.props.popular.results}
              showsHorizontalScrollIndicator={false}
              emptyComponent={this.showShimmer1}
              renderPlaceholder
              renderItem={({ item }) => (
                <CardFavorite item={item} {...this.props} />
              )}
            />
          </Content>
        </Content>
      </Container>
    );
  }
}

const stateMapToProps = state => ({
  popular: state.popularReducers,
  allVideo: state.videoReducers,
  user: state.userReducers
});

export default connect(stateMapToProps)(NewHome);

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  content: {
    flex: 1
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 72,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  bartwo: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 120,
    height: 80,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  title: {
    color: "white",
    fontSize: 18
  },
  row: {
    height: 40,
    margin: 16
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    flex: 1,
    width: null
  },
  wrapper: {}
});
