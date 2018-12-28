/* Reducer berfungsi untuk memanggil function di action dengan dimana ini logika yang diterapkan */

const initialState = {
    results: [],
    isLoading: false,
    isError: false
}

function categoryReducers(state = initialState, action) {
    switch (action.type) {

        case "CATEGORY_PENDING":
            return { ...state, isLoading: true }
        case "CATEGORY_FULFILLED":
            return { ...state, isLoading: false, results: action.payload.data }
        case "CATEGORY_REJECTED":
            return { ...state, isLoading: false, isError: true }

        default:
            return state
    }
}

export default categoryReducers