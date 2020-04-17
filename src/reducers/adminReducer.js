const initalState = {}

const adminReducer = (state=initalState,action) => {
    switch(action.type){
        case 'ADD_ADMIN_DATA' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default adminReducer