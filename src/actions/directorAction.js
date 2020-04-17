import axios from '../config/axios'
import Swal from 'sweetalert2'

export const addDirector = (director) => {
    return {type : 'ADD_DIRECTOR',payload : director}
}

export const startAddDirector = (token) => {
    return(dispatch)=>{
        axios.get('/director',{
            headers : {
                'x-auth' : localStorage.getItem('film-token')
            }
        })
        .then((response)=>{
            dispatch(addDirector(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startPostDirector = (obj) => {
    return(dispatch)=>{
        axios.post('/director',obj.formData,{
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
                dispatch(addDirector(response.data))
                Swal.fire(
                    'Success',
                    'Profile Added Successfully',
                    'success'
                )
                window.location.href = '/director/profile'
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startAddNewMovies = (obj) => {
    return(dispatch)=>{
        axios.post('/director',obj.formData,{
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
                dispatch(addDirector(response.data))
                Swal.fire(
                    'Success',
                    'Profile Added Successfully',
                    'success'
                )
                window.location.href = '/director/movie'
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startAddCandidatesToDirector = (obj) => {
    return(dispatch)=>{
        axios.post(`/director/addCandidate/${obj.id}`,obj.candidateDetails)
            .then((response)=>{
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startAddOtherCandidatesToDirector = (obj) => {
    return(dispatch)=>{
        axios.post(`/director/addOtherCandidate/${obj.id}`,obj.otherCandidateDetails)
            .then((response)=>{
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startAddPlanCandidates = (obj) => {
    return(dispatch)=>{
        axios.post('/director/planCandidate',obj.candidateDetails,{
            headers : {
                'x-auth' : localStorage.getItem('film-token')
            }
        })
        .then((director)=>{
            dispatch(addDirector(director.data))
            Swal.fire(
                'Success',
                `${obj.candidateDetails.name} Added To Your Plan`,
                'success'
            )
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startAddPlanOtherCandidtes = (obj) => {
    return(dispatch)=>{
        axios.post('/director/planOtherCandidate',obj.otherCandidateDetails,{
            headers : {
                'x-auth' : localStorage.getItem('film-token')
            }
        })
        .then((director)=>{
            dispatch(addDirector(director.data))
            Swal.fire(
                'Success',
                `${obj.otherCandidateDetails.name} Added To Your Plan`,
                'success'
            )
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

