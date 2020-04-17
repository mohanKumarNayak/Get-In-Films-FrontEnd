const intialState = {}

const directorReducer = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_DIRECTOR' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default directorReducer