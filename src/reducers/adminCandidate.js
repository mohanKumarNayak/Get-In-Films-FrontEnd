const intialState = []

const adminCandidate = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_ADMIN_CANDIDATE' : {
            return [...action.payload]
        }
        case 'REMOVE_CANDIDATE' : {
            return state.filter(candidate=>candidate.user != action.payload.user)
        }
        default : {
            return [...state]
        }
    }
}

export default adminCandidate