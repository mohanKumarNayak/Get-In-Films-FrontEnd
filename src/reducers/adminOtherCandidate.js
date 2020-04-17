const intialState = []

const adminOtherCandidate = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_ADMIN_OTHER_CANDIDATE' : {
            return [...action.payload]
        }
        case 'REMOVE_OTHER_CANDIDATE'  : {
            return state.filter(otherCandidate=>otherCandidate.user != action.payload.user)
        }
        default : {
            return [...state]
        }
    }
}

export default adminOtherCandidate