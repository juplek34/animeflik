import React, { PureComponent } from 'react'
import { Text, View, ImageBackground, ScrollView, Image, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { Container, Header, Icon, Item, Input, Content, Card, Left } from 'native-base';

import ListCategory from '../components/ListCategory'
import GridList from 'react-native-grid-list'
import CardFavorite from '../components/CardFavorite'
import { CATEGORY, SEARCH } from '../actions/video'
import { connect } from 'react-redux'
import Shimmer from './Shimmer'


class SearchScreen extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      category: 'action',
      videos: 12,
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
    }

  }


  componentDidMount() {
    this.props.dispatch(CATEGORY(this.props.navigation.getParam('category', 'action'), 12))
  }

  category = (category) => {
    this.setState({ category, videos: 12 })
    this.props.dispatch(CATEGORY(category, this.state.videos))
  }

  handleCategory = () => {
    console.log(this.state.category)
    this.props.dispatch(CATEGORY(this.state.category, this.state.videos + 3))
    this.setState({ videos: this.state.videos + 3 })
  }

  emptyComponent = () => {
    return <GridList
      data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
      numColumns={3}
      renderItem={() =>
        <Shimmer
          style={{ height: 180, width: 110, marginRight: 10 }}
          autoRun={true} />
      }
      columnWrapperStyle={{ marginBottom: 80, marginLeft: 5 }}
    />
  }

  footerComponent = () => {
    return <GridList
      data={[1, 1, 1]}
      numColumns={3}
      renderItem={() =>
        <Shimmer
          style={{ height: 180, width: 110, marginRight: 10 }}
          autoRun={true} />
      }
      columnWrapperStyle={{ marginBottom: 80, marginLeft: 5 }}
    />
  }




  search = (text) => {
    this.props.dispatch(SEARCH(text))
  }

 
  render() {

    return (
      <Container style={{backgroundColor:'#101010'}}>
        <Header androidStatusBarColor='transparent' style={{ height: 150, backgroundColor: '#101010', flexDirection: 'column', padding: 0 }}>

          <View style={{ flex: 1, justifyContent: 'center', marginTop: 30 }}>
            <Item style={{ backgroundColor: 'white', borderRadius: 20, paddingLeft: 10, height: 35 }}>
              <Icon name="ios-search" style={{ color: '#D8368C' }} />
              <Input placeholder="Search" placeholderTextColor='#CBC9C9' onChangeText={(text) => this.search(text)} />

            </Item>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', marginTop: 10, marginRight: 0 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {this.state.listCategory.map((item, key) => (
                <TouchableOpacity onPress={() => this.category(item.name)} key={key}>
                  <ListCategory

                    name={item.name}
                    image={item.image}
                  />
                </TouchableOpacity>

              ))}

            </ScrollView>

          </View>

        </Header>
        <Content>
          <View style={{ marginTop: 10 }}>
            <FlatList
              
              removeClippedSubviews={true}
              onEndReached={this.handleCategory}
              onEndReachedThreshold={.8}
              ListEmptyComponent={this.emptyComponent}
              ListFooterComponent={this.footerComponent}
              keyExtractor={(item, index) => `index${index}`}
              data={this.props.category.results}
              numColumns={3}
              renderItem={({ item }) => (
                <CardFavorite item={item} {...this.props} />
              
                )}
            />

          </View>


        </Content>
      </Container>
    )
  }
}
const stateMaptoProps = (state) => ({
  category: state.categoryReducers
})

export default connect(stateMaptoProps)(SearchScreen)