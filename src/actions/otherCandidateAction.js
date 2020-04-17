import axios from '../config/axios'
import Swal from 'sweetalert2'

export const addOtherCandidate = (otherCandidate) =>{
    return {type : 'ADD_OTHERCANDIDATE',payload : otherCandidate }
}

export const startAddOtherCandidates = (token) => {
    return(dispatch)=>{
        axios.get('/otherCandidate',{
            headers : {
                'x-auth' : token
            }
        })
        .then((response)=>{
            dispatch(addOtherCandidate(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const startPostOtherCandidate = (obj) => {
    return(dispatch)=>{
        axios.post('/otherCandidate',obj.formData,{
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
                dispatch(addOtherCandidate(response.data))
                Swal.fire(
                    'Success',
                    'Profile Added Successfully',
                    'success'
                )
                window.location.href = '/otherCandidate/profile'
            }
        })
    }
}

export const addNewMovies = (newMovies) => {
    return {type : 'ADD_NEW_MOVIES',payload : newMovies}
}

export const startAddNewMoviesOthers = () => {
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

export const startAddAllDirectorInfoOtherCandidates = () => {
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

export const startAddMovieToOtherCandidate = (obj) => {
    return(dispatch)=>{
        axios.post('/otherCandidate/addMovie',obj.movieDetails,{
            headers : {
                'x-auth' : localStorage.getItem('film-token')
            }
        })
        .then((response)=>{
            dispatch(addOtherCandidate(response.data))
            Swal.fire(
                'Success',
                'successfully applied for Audition',
                'success'
            )
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}