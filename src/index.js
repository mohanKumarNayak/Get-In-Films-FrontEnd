import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import {Provider} from 'react-redux'
import configureStore from './store/confiureStore';
import {startUserAccount} from './actions/userAction'
import {startAddCandidate,startAddNewMovies,startAddAllDirectorInfo, startAddMovieToCandidate} from './actions/candidateAction'
import {startAddDirector} from './actions/directorAction'
import {startAddOtherCandidates,startAddNewMoviesOthers,startAddAllDirectorInfoOtherCandidates} from './actions/otherCandidateAction'
import {startGetAllPlans} from './actions/allPlanAction'
import {startGetAllDatas,startAddAdminData} from './actions/adminAction'




const store = configureStore()




if(localStorage.getItem('film-token')){
      store.dispatch(startUserAccount(localStorage.getItem('film-token')))
      if(store.getState().candidate){
      store.dispatch(startAddCandidate(localStorage.getItem('film-token')))
      store.dispatch(startAddNewMovies())
      store.dispatch(startAddAllDirectorInfo())
      store.dispatch(startGetAllPlans())
      }
      if(store.getState().director){
        store.dispatch(startAddDirector(localStorage.getItem('film-token')))
      }
      if(store.getState().otherCandidate){
        store.dispatch(startAddOtherCandidates(localStorage.getItem('film-token')))
        store.dispatch(startAddNewMoviesOthers())
        store.dispatch(startAddAllDirectorInfoOtherCandidates())
        store.dispatch(startGetAllPlans())
        
      }
      if(store.getState().admin){
        store.dispatch(startUserAccount(localStorage.getItem('film-token')))
        store.dispatch(startAddAdminData())
        store.dispatch(startGetAllDatas())
      }
}
else {
    store.dispatch(startAddNewMovies())
}



const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(jsx , document.getElementById('root'))

