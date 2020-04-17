const intialState = {}

const candidateReducer = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_CANDIDATE' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default candidateReducer