import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableHighlight,
  FlatList,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
  WebView
} from "react-native";
import {
  Tab,
  Container,
  ListItem,
  ScrollableTab,
  Content,
  List,
  Left,
  Right,
  Body,
  Tabs,
  Button,
  Icon
} from "native-base";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import { Col, Row, Grid } from "react-native-easy-grid";
// import WebView from "react-native-android-fullscreen-webview-video";
import CardFavorite from "../components/CardFavorite";
import { EPISODE, DETAIL_VIDEO, CATEGORY } from "../actions/video";
import { connect } from "react-redux";
import { _ } from "lodash"
import Shimmer from './Shimmer';

import ScrollableTabView, {
  DefaultTabBar
} from "react-native-scrollable-tab-view";

class VideoScreen extends React.Component {
  getSeries = (type, value) => this.props.navigation.getParam(type, value);
  componentDidMount() {
    const series = this.getSeries("series", false);
    this.props.dispatch(EPISODE(series));
    this.props.dispatch(DETAIL_VIDEO(this.state.slug));
    if (!this.state.slug) {
      this.setState({
        slug: series.replace(/\s+/g, "-").toLowerCase() + "-episode-1"
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      favorite: true,
      slug: props.navigation.getParam("slug", false),
      isVisible: false,
      movieData: []
    };
  }
  
  button() {
    Alert.alert(
      "Removing Boruto?",
      "You'll not longer get notification from this anime ",
      [
        {
          text: "NO",
          onPress: () => this.setState({ favorite: false }),
          style: "cancel"
        },
        { text: "YES", onPress: () => this.setState({ favorite: true }) }
      ]
    );
  }
  ShowHideTextComponentView = () => {
    if (this.state.favorite == true) {
      this.setState({ favorite: false });
    } else {
      this.button();
    }
  };

  episode = slug => {
    this.setState({ slug: slug });
    this.props.dispatch(DETAIL_VIDEO(slug));
  };

  componentWillMount() {
    setTimeout(() => {
        this.setState({
            isVisible: true
        })
    }, 5000)
}

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "#232426" }}>
        <View style={{ flex: 1, backgroundColor: "red" }}>
        <WebView
            source={{ uri: this.props.detail.data.video_url }}
            // source={{ uri: "https://cldup.com/vHdglqWDXx.mp4" }}
            style={{ flex: 1 }}
            title={this.props.detail.data.title}
            onBack={() => null}
            originWhitelist={["http://153.92.5.103/"]}
          />
        </View>
        <View style={{ flex: 2 }}>
          {/* <Content> */}
          {/* <Tabs locked renderTabBar={() => <ScrollableTab style={{ borderWidth: 0, borderBottomWidth: 2, backgroundColor: 'transparent' }} />} tabContainerStyle={{ backgroundColor: '#fcfcfc' }} tabBarUnderlineStyle={{ backgroundColor: '#D8368C', elevation: 0 }} >

              <Tab heading="Episodes" textStyle={styles.texttab} activeTextStyle={{ color: '#D8368C' }} tabStyle={{ backgroundColor: 'transparent' }} activeTabStyle={{ backgroundColor: 'transparent' }}>
                <Content style={{ backgroundColor: '#fcfcfc' }} padder>
                  <View>
                    <List>
                      <FlatList
                        data={this.props.episode.results}
                        renderItem={({ item }) =>

                          <ListItem style={{ borderBottomWidth: 0, marginLeft: 0, backgroundColor: this.state.slug == item.slug ? "#cde1f9" : "White" }} onPress={() => this.episode(item.slug)}>
                            <Left>
                              <Image
                                source={{ uri: item.image_url }}
                                style={{
                                  flex: 1, width: 80, height: 80, resizeMode: 'cover', borderRadius: 10
                                }}
                              />
                            </Left>
                            <Body style={{ marginLeft: 10 }}>
                              <Text style={{ color: '#D8368C', fontWeight: 'bold' }}>Episode {item.episode}</Text>
                              <Text style={{ color: '#D8368C' }}>24 minute</Text>
                            </Body>
                            <Right>
                              <Button transparent>
                                <IconM name="eye" style={{ color: '#D8368C' }} size={20} />
                              </Button>
                            </Right>
                          </ListItem>

                        }
                        keyExtractor={(item) => `index${item.id}`}
                        showsHorizontalScrollIndicator={false}
                      />
                    </List>
                  </View>
                </Content>
              </Tab>
              <Tab heading="Description" textStyle={styles.texttab} activeTextStyle={{ color: '#D8368C' }} tabStyle={{ backgroundColor: 'transparent' }} activeTabStyle={{ backgroundColor: 'transparent' }}>
                <Content style={{ backgroundColor: '#fcfcfc' }} padder>
                  <View>
                    <Grid>
                      <Row style={{ flexDirection: 'row' }}>

                        <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontFamily: 'Roboto', color: '#D8368C', fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Storyline</Text>
                        <View style={{ backgroundColor: '#D8368C', height: 1, flex: 1, alignSelf: 'center' }} />
                      </Row>
                      <Row>
                        <Text style={{ marginLeft: 0, color: '#D8368C', fontSize: 15, fontFamily: 'Roboto', }}>
                          {this.props.detail.data.description}
                        </Text>
                      </Row>
                      <Row style={{ flexDirection: 'row' }}>
                        <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontFamily: 'Roboto', color: '#D8368C', fontSize: 21, fontWeight: 'bold', marginBottom: 8, marginTop: 8 }}>MORE LIKE THIS</Text>
                        <View style={{ backgroundColor: '#D8368C', height: 1, flex: 1, alignSelf: 'center' }} />
                      </Row>
                      <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.props.episode.results}
                        renderItem={({ item }) =>
                          <CardFavorite item={item} {...this.props} />
                        }
                        keyExtractor={(item) => `index${item.id}`}
                      />
                    </Grid>
                  </View>
                </Content>
              </Tab>
              <Tab heading="Comment" textStyle={styles.texttab} activeTextStyle={{ color: '#D8368C' }} tabStyle={{ backgroundColor: 'transparent' }} activeTabStyle={{ backgroundColor: 'transparent' }}>
                <Content style={{ backgroundColor: '#fcfcfc' }} padder>
                  <View><Text>HI</Text></View>
                </Content>
              </Tab>
            </Tabs> */}

          <ScrollableTabView
            tabBarBackgroundColor="#232426"
            tabBarActiveTextColor="#D8368C"
            tabBarInactiveTextColor="grey"
            tabBarTextStyle={{ fontFamily: "Roboto-Medium", fontSize: 14 }}
            tabBarUnderlineStyle={{
              backgroundColor: "#D8368C",
              borderBottomColor: "red",
              
            
            }}
          >
            <ScrollView
              tabLabel="Episodes"
              style={{ backgroundColor: "#232426" }}
            >
            
              <View style={{borderBottomColor:'#D8368C'}}>
                <ScrollView showsVerticalScrollIndicator={false} >
                  <List>
                    <FlatList
                      data={this.props.episode.results}
                      renderItem={({ item }) => (
                        <ListItem
                          style={{
                            borderBottomWidth: 0,
                            marginLeft: 0,
                            backgroundColor:
                              this.state.slug == item.slug ? "#515154" : "#232426"
                          }}
                          onPress={() => this.episode(item.slug)}
                        >
                          <Left>
                          <Shimmer autoRun={true} style={{flex: 1, width: 80, height: 80, resizeMode: "cover", borderRadius: 10, marginLeft: 20}} visible={this.state.isVisible}>
                            <Image
                              source={{ uri: item.image_url }}
                              style={{
                                flex: 1,
                                width: 80,
                                height: 80,
                                resizeMode: "cover",
                                borderRadius: 10,
                                marginLeft: 20
                              }}
                            />
                          </Shimmer>
                          </Left>
                          <Body style={{ marginLeft: 10 }}>
                          <Shimmer autoRun={true} style={{marginLeft: 10}} visible={this.state.isVisible}>
                            <Text
                              style={{ color: "#dedee6", fontWeight: "bold" }}
                            >
                              Episode {item.episode}
                            </Text>
                            </Shimmer>
                            <Shimmer autoRun={true} style={{marginLeft: 10}} visible={this.state.isVisible}>
                            <Text style={{ color: "#dedee6" }}>24 minute</Text>
                            </Shimmer>
                          </Body>
                          <Right>
                            <Button transparent>
                              <IconM
                                name="eye"
                                style={{ color: "#dedee6" }}
                                size={20}
                              />
                            </Button>
                          </Right>
                        </ListItem>
                      )}
                      keyExtractor={item => `index${item.id}`}
                      showsHorizontalScrollIndicator={false}
                    />
                  </List>
                  {/* {this.state.episode.map((item, key) => (
                                <ListEpisode
                                    image={item.image}
                                    episode={item.episode}
                                    key={key}
                                />
                            ))} */}
                </ScrollView>
              </View>
            </ScrollView>
            <ScrollView
              tabLabel="Description"
              style={{ backgroundColor: "#232426" }}
            >
              <View>
                <View style={{ marginTop: 10, padding: 10 }}>
                <Shimmer autoRun={true} style={{marginTop: 10, padding: 10 }} visible={this.state.isVisible}>
                  <Text
                    style={{
                      textAlign: "justify",
                      fontFamily: "Roboto-Medium",
                      fontSize: 14,
                      color: "#dedee6"
                    }}
                  >
                    {this.props.detail.data.description}

                  </Text>
                  </Shimmer>
                </View>
                <View
                  style={{
                    borderTopWidth: 3,
                    borderTopColor: "#D8368C",
                    marginTop: 20
                  }}
                >
                  <View
                    style={{
                      height: 30,
                      width: 110,
                      backgroundColor: "#232426",
                      marginTop: -15
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Roboto-Medium",
                        fontSize: 18,
                        color: "#D8368C",
                        marginLeft: 10
                      }}
                    >
                      Related
                    </Text>
                  </View>
                  <View>
                    <ScrollView
                      horizontal
                      style={{ marginLeft: 20, marginTop: 10 }}
                      showsHorizontalScrollIndicator={false}
                    >
                      {/* {this.state.related.map((item, key) => (
                                        <CusCardView
                                            image={item.image}
                                            age={item.age}
                                            title={item.title}
                                            star={item.star}
                                            imdb={item.imdb}
                                            key={key}
                                        /> */}
                      {/* ))} */}

                      <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.props.episode.results}
                        renderItem={({ item }) => (
                          <CardFavorite item={item} {...this.props} />
                        )}
                        keyExtractor={item => `index${item.id}`}
                      />
                    </ScrollView>
                  </View>
                </View>
              </View>
            </ScrollView>
            {/* <ScrollView
              tabLabel="Comment"
              style={{ backgroundColor: "#fcfcfc" }}
            >
              <View>
                <Text>Comment</Text>
              </View>
            </ScrollView> */}
          </ScrollableTabView>

          {/* </Content> */}
        </View>

        <Button onPress={this.ShowHideTextComponentView} iconRight full style={{ backgroundColor: this.state.favorite ? '#D8368C' : 'white' }}>
          {
            this.state.favorite ? <Text style={{ color: '#fff', fontFamily: 'Robotic', fontWeight: 'bold' }}>Add to Favorite</Text> : <Text style={{ fontFamily: 'Robotic', fontWeight: 'bold' }}>Already in Favorite <Image source={require('../assets/icon/done.png')} style={{ height: 12, width: 12, marginLeft: 5 }} />
            </Text>
          }


        </Button>

      </Container>
    );
  }
}
const styles = StyleSheet.create({
  video: {
    width: 360,
    height: 200,
    alignSelf: "center"
  },
  texttab: {
    color: "#B8B4B4",
    fontWeight: "bold",
    fontFamily: "Roboto"
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: "center"
  }
});

const mapStateToProps = state => ({
  episode: state.episodeReducers,
  detail: state.videoReducers,
  category: state.categoryReducers
});

export default connect(mapStateToProps)(VideoScreen);
