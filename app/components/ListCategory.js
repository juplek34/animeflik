import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'

class ListCategory extends Component {
    render() {
        return (
            <View style={{ borderRadius: 16, width: 90, height: 30, marginRight: 10 }}>
                <ImageBackground source={this.props.image} style={{ height: 30, width: 90 }} imageStyle={{ borderRadius: 16 }}>
                    <View style={{ backgroundColor: 'rgba(88, 89, 197, 0.7)', width: 90, height: 30, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 14, color: 'white', fontFamily: 'Roboto-Medium' }}>
                            {this.props.name}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default ListCategory