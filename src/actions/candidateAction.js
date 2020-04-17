import axios from '../config/axios'
import Swal from 'sweetalert2'
import allDirectorInfo from '../reducers/allDirectorInfo'

export const addCandidate = (candidate) => {
    return {type : 'ADD_CANDIDATE' , payload : candidate}
}

export const startAddCandidate = (token) => {
    return(dispatch)=>{
        axios.get('/candidate',{
            headers : {
                'x-auth' : token
            }
        })
        .then((response)=>{
            dispatch(addCandidate(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startPostCandidate = (obj) => {
    return(dispatch)=>{
        axios.post('/candidate',obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('film-token')
            }
        })
        .then((response)=>{
            if(response.data.message){
                Swal.fire(
                    'Error',
                     response.data.message,
                    'error'
                )
            }
            else{
                dispatch(addCandidate(response.data))
                Swal.fire(
                    'Success',
                    'Added Data Successfully',
                    'success'
                )
                window.location.href = '/candidate/profile'
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addNewMovies = (newMovies) => {
    return {type : 'ADD_NEW_MOVIES',payload : newMovies}
}

export const startAddNewMovies = () => {
    return(dispatch)=>{
        axios.get('director/all')
            .then((response)=>{
                dispatch(addNewMovies(response.data))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const addAllDirectorInfo = (allDirectors) => {
    return {type : 'ALL_DIRECTOR_INFO',payload:allDirectors}
}

export const startAddAllDirectorInfo = () => {
    return(dispatch)=>{
        axios.get('/director/all/profile')
            .then((allDirectors)=>{
                dispatch(addAllDirectorInfo(allDirectors.data))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startAddMovieToCandidate = (obj) => {
    return(dispatch)=>{
        axios.post('/candidate/addMovie',obj.movieDetails,{
            headers : {
                'x-auth' : localStorage.getItem('film-token')
            }
        })
        .then((response)=>{
            Swal.fire(
                'Success',
                'Audition Successfully Applied',
                'success'
            )
            dispatch(addCandidate(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}