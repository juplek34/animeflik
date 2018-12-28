/* Reducer berfungsi untuk memanggil function di action dengan dimana ini logika yang diterapkan */

import _ from 'lodash'

const initialState = {
    results: [],
    isLoading: false,
    isError: false
}

function episodeReducers(state = initialState, action) {
    switch (action.type) {

        case "EPISODE_PENDING":
            return { ...state, isLoading: true }
        case "EPISODE_FULFILLED":
            return { ...state, isLoading: false, results:  _.orderBy(action.payload.data, [(res) => parseInt(res.episode)], ['desc'] ) }
        case "EPISODE_REJECTED":
            return { ...state, isLoading: false, isError: true }

        default:
            return state
    }
}

export default episodeReducers