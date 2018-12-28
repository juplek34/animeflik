/* Reducer berfungsi untuk memanggil function di action dengan dimana ini logika yang diterapkan */

const initialState = {
    data: {},
    isLoading: false,
    isError: false
}

function userReducers(state = initialState, action) {
    switch (action.type) {

        case "USER_PENDING":
            return { ...state, isLoading: true }
        case "USER_FULFILLED":
            return { ...state, isLoading: false, data: action.payload.data }
        case "USER_REJECTED":
            return { ...state, isLoading: false, isError: true }

        case "USER":
            return { ...state, isLoading: false, data: action.payload }
        
            default:
            return state
    }
}

export default userReducers