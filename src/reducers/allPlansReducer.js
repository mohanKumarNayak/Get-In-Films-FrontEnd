const intialState = []

const allPlanReducer = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_PLANS' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default allPlanReducer