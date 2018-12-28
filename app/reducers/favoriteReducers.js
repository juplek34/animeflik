/* Reducer berfungsi untuk memanggil function di action dengan dimana ini logika yang diterapkan */

const initialState = {
    results: [],
    isLoading: true,
    isError: false
}

function favoriteReducers(state = initialState, action) {
    switch (action.type) {

        case "FAVORITE_PENDING":
            return { ...state, isLoading: true }
        case "FAVORITE_FULFILLED":
            return { ...state, isLoading: false, results: action.payload.data }
        case "FAVORITE_REJECTED":
            return { ...state, isLoading: false, isError: true }

        default:
            return state
    }
}

export default favoriteReducers