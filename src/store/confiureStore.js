import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import candidateReducer from '../reducers/candidateReducer'
import directorReducer from '../reducers/directorReducer'
import otherCandidateReducer from '../reducers/otherCandidateReducer'
import newMoviesReducer from '../reducers/newMoviesReducer'
import allDirectorInfo from '../reducers/allDirectorInfo'
import allPlanReducer from '../reducers/allPlansReducer'
import adminCandidate from '../reducers/adminCandidate'
import adminOtherCandidate from '../reducers/adminOtherCandidate'
import adminDirector from '../reducers/adminDirectors'
import adminReducer from '../reducers/adminReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user : userReducer,
        candidate : candidateReducer,
        director : directorReducer,
        otherCandidate : otherCandidateReducer,
        newMovies : newMoviesReducer,
        allDirectorInfo : allDirectorInfo,
        allPlan : allPlanReducer,
        adminDirector : adminDirector,
        adminCandidate : adminCandidate,
        adminOtherCandidate : adminOtherCandidate,
        admin : adminReducer
    }),applyMiddleware(thunk))
    return store
}



export default configureStore