const intialState = {} 

const otherCandidateReducer = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_OTHERCANDIDATE' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default otherCandidateReducer