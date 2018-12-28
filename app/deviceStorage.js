import { AsyncStorage } from 'react-native'

const deviceStorage = {

    async saveKey(value) {
        try {
            await AsyncStorage.setItem('token', value)
        } catch (error) {
            alert('kali eror' + error.toString())
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async getKey() {
        try {
            return await AsyncStorage.getItem('token') || false
        } catch (error) {
            alert(error.message)
        }
    },

    async removeKey() {
        try {
            await AsyncStorage.removeItem('token')
        } catch (error) {
            return alert(error.message)
        }

    }
}

export default deviceStorage