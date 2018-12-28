import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, AsyncStorage } from 'react-native'
import { Card } from 'native-base'
import axios from 'axios'
import Star from 'react-native-star-view';
import { GET_FAVORIT, USER } from '../actions/video';
import { connect } from 'react-redux'
import ip from '../config'

class CardFavorite extends Component {

    async componentDidMount() {


        const token = await AsyncStorage.getItem('token')
        console.log(token)
        if (token === null) {
            this.setState({ isLogin: false })
        } else if (token === 'isRegister') {
            this.setState({ isLogin: false })
        } else {
            this.props.dispatch(GET_FAVORIT(token))
            this.setState({ isLogin: true })
        }

    }

    state = {
        favorit: false,
        isLogin: false,
        isLoading: false,
    }

    favorit = async (item) => {
        const token = await AsyncStorage.getItem('token')
        console.log('data')
        if (token != null) {
            console.log(item)
            await axios.post(ip + '/user/favorite',
                {
                    series: item
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    },
                }

            ).then(() =>
                this.setState({ favorit: !this.setState.favorit })
            ).catch((error) => {
                console.log(error)
            })
        }
    }

    showFavorit(item) {
        if (this.props.favorite.results.name_series === item.item.series) {
            return (
                <TouchableOpacity disabled={!this.state.isLogin} onPress={() => this.favorit(item.series)}>
                    <View style={{ height: 30, width: null, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopColor: '#D8368C', borderTopWidth: 2 }}>
                        <Text style={{ color: '#D8368C', fontFamily: 'Roboto-Medium', fontSize: 10 }}>
                            Favorit
                    </Text>
                        <Image source={require('../assets/icon/done.png')} style={{ height: 12, width: 12, marginLeft: 5 }} />
                    </View>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity disabled={!this.state.isLogin} onPress={() => this.favorit(item.item.series)}>
                    <View style={{ height: 30, width: null, backgroundColor: this.state.isLogin ? '#D8368C' : '#929292', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <Text style={{ color: 'white', fontFamily: 'Roboto-Medium', fontSize: 10 }}>
                            Add to Favorit
                    </Text>
                        <Image source={require('../assets/icon/add.png')} style={{ height: 12, width: 12, marginLeft: 5 }} />
                    </View>
                </TouchableOpacity>
            )

        }
    }

    render() {
        const { item } = this.props
        return (
            <Card style={{ width: null, height: 180, borderRadius: 16 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('VideoScreen', {
                    series: item.series
                })}>
                    <ImageBackground style={{ width: null, height: 150 }} source={{ uri: item.image_url }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: 50, width: null }}>
                                <View style={{ height: null, width: 110 }}>
                                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 12, color: 'white', marginLeft: 5 }}>
                                        {item.series.substring(0, 24)}...
                                    </Text>
                                </View>

                                <Star score={item.rating / 2} style={{ width: 40, height: 8, marginLeft: 5 }} />

                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                {this.showFavorit({ item })}
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    favorite: state.favoriteReducers
})

export default connect(mapStateToProps)(CardFavorite)