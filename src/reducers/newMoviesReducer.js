const intialState = []

const newMoviesReducer = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_NEW_MOVIES' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default newMoviesReducer