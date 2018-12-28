import { combineReducers } from 'redux'
import videoReducers from './videoReducers'
import popularReducers from './popularReducers'
import categoryReducers from './categoryReducers'
import episodeReducers from './episodeReducers'
import userReducers from './userReducers'
import favoriteReducers from './favoriteReducers'

const reducers = combineReducers({
    videoReducers,
    popularReducers,
    categoryReducers,
    episodeReducers,
    userReducers,
    favoriteReducers
})

export default reducers