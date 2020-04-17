const intialState = []

const adminDirector = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_ADMIN_DIRECTOR' : {
            return [...action.payload]
        }
        case 'REMOVE_DIRECTOR' : {
            return state.filter(director=>director.user !== action.payload.user)
        }
        default : {
            return [...state]
        }
    }
}

export default adminDirector