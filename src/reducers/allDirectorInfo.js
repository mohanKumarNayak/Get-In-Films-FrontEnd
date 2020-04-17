const intialState = []

const allDirectorInfo = (state=intialState,action) => {
    switch(action.type){
        case 'ALL_DIRECTOR_INFO' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default allDirectorInfo