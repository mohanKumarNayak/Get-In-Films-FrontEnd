import Swal from "sweetalert2";
import axios from '../config/axios'

export const addAdminDirecrtor = (director) => {
    return {type : 'ADD_ADMIN_DIRECTOR',payload : director}
}

export const addAdminCandidate = (candidate) => {
    return {type : 'ADD_ADMIN_CANDIDATE',payload : candidate}
}

export const addAdminOtherCandidate = (otherCandidate) => {
    return {type : 'ADD_ADMIN_OTHER_CANDIDATE',payload : otherCandidate}
}

export const startGetAllDatas = () => {
    return(dispatch)=>{
        Promise.all([axios.get('/admin/director'),axios.get('/admin/candidate'),axios.get('/admin/otherCandidate')])
        .then((response)=>{
           const [director,candidate,otherCandidate]=response
           dispatch(addAdminDirecrtor(director.data))
           dispatch(addAdminCandidate(candidate.data))
           dispatch(addAdminOtherCandidate(otherCandidate.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addAdminData = (admin) => {
    return {type : 'ADD_ADMIN_DATA',payload : admin}
}

export const startAddAdminData = () => {
    return(dispatch)=>{
        axios.get('/admin',{
            headers : {
                'x-auth' : localStorage.getItem('film-token')
            }
        })
        .then((response)=>{
            dispatch(addAdminData(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const removeDirector = (director) => {
    return {type : 'REMOVE_DIRECTOR' ,payload : director}
}

export const startRemoveDirector = (id) => {
    return(dispatch)=>{
        axios.delete(`/admin/director/${id}`)
            .then((director)=>{
                Swal.fire(
                    'Success',
                    'Director successfully removed',
                    'success'
                )
                dispatch(removeDirector(director.data))
                
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const removeCandidate = (candidate) => {
    return {type : 'REMOVE_CANDIDATE' ,payload : candidate}
}

export const startRemoveCandidate = (id) => {
    return(dispatch)=>{
        axios.delete(`/admin/candidate/${id}`)
            .then((candidate)=>{
                Swal.fire(
                    'Success',
                    'Candidate successfully removed',
                    'success'
                )
                dispatch(removeCandidate(candidate.data))
                
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const removeOtherCandidate = (otherCandidate) => {
    return {type : 'REMOVE_OTHER_CANDIDATE' ,payload : otherCandidate}
}

export const startRemoveOtherCandidate = (id) => {
    return(dispatch)=>{
        axios.delete(`/admin/otherCandidate/${id}`)
            .then((otherCandidate)=>{
                Swal.fire(
                    'Success',
                    'Other Candidate successfully removed',
                    'success'
                )
                dispatch(removeOtherCandidate(otherCandidate.data))
                
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const addFeedBackToAdmin = (formData) => {
    return(dispatch)=>{
        axios.post('/admin/feedback',formData)
            .then((response)=>{
                Swal.fire(
                    'Success',
                    'Query Successfully Sent',
                    'success'
                )
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}
