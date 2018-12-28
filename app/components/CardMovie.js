import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { Container, Header, Icon, Item, Input, Content, Card, Left } from 'native-base';

class CardMovie extends Component {
  render() {
    return (
      <Card style={{ width: 110, height: 180, backgroundColor: 'red', borderRadius: 16 }}>
        <ImageBackground style={{ width: 110, height: 150 }} source={item.image} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: 40, width: 110, alignSelf: 'flex-end' }}>
              <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: 'white', marginLeft: 5 }}>
                {this.props.title}
              </Text>
              <Star score={this.props.star} style={{ width: 40, height: 8, marginLeft: 5 }} />
              <View style={{ height: 15, width: 105, alignItems: 'flex-end', marginRight: 10 }}>
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 10, color: 'white' }}>
                  {this.props.age} +
              </Text>
              </View>

            </View>
          </View>
        </ImageBackground>
        <View style={{ height: 30, width: 110, backgroundColor: '#D8368C', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
          <Text style={{ color: 'white', fontFamily: 'Roboto-Medium', fontSize: 10 }}>
            Add to Favorit
          </Text>
          <Image source={require('../assets/icon/add.png')} style={{ height: 12, width: 12, marginLeft: 5 }} />
        </View>
      </Card>
    )
  }
}

export default CardMovie