import axios from '../config/axios'
import Swal from 'sweetalert2'

export const addPlans = (plans) => {
    return {type : 'ADD_PLANS',payload : plans}
}

export const startGetAllPlans = () => {
    return(dispatch)=>{
        axios.get('/director/allPlans')
        .then((plans)=>{
            dispatch(addPlans(plans.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startUpdateCandidateStatus = (obj) => {
    return(dispatch)=>{
        axios.put(`/director/planCandidate/${obj.id}`,obj.planId)
        .then((response)=>{
            dispatch(startGetAllPlans())
            Swal.fire(
                'Success',
                'Confirmed that You have been accepted the offer from the Director',
                'success'
            )
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startUpdateOtherCandidateStatus = (obj) => {
    return(dispatch)=>{
        axios.put(`/director/planOtherCandidate/${obj.id}`,obj.planId)
        .then((response)=>{
            dispatch(startGetAllPlans())
            Swal.fire(
                'Success',
                'Confirmed that You have been accepted the offer from the Director',
                'success'
            )
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}