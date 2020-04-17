import axios from '../config/axios'
import Swal from 'sweetalert2'
import axios2 from 'axios'

export const startRegisterUser = (obj) => {
    return(disptach)=>{
    axios.post('/users/register',obj.formData)
        .then((response)=>{
            if(response.data._id){
                Swal.fire(
                    'Added',
                    'User successfully added',
                    'success'
                )
                obj.redirect()
            }
            else if(response.data.errmsg){
                Swal.fire(
                    'Error',
                     response.data.errmsg,
                    'error'
                )
            }
            else{
                Swal.fire(
                    'Error',
                     response.data.message,
                    'error'
                )
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addUser = (user) => {
    return {type : 'ADD_USER',payload : user}
}

export const startUserAccount = (token) => {
    return(dispatch)=>{
        axios.get('/users/account',{
            headers : {
                'x-auth' : token
            }
        })
        .then((response)=>{
            dispatch(addUser(response.data))
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addCandidate = (candidate) => {
    return {type : 'ADD_CANDIDATE',payload : candidate}
}

export const addDirector = (director) => {
    return {type : 'ADD_DIRECTOR',payload : director}
}

export const addOtherCandidate = (otherCandidate) =>{
    return {type : 'ADD_OTHERCANDIDATE',payload : otherCandidate }
}

export const addAdminDirecrtor = (director) => {
    return {type : 'ADD_ADMIN_DIRECTOR',payload : director}
}

export const addAdminCandidate = (candidate) => {
    return {type : 'ADD_ADMIN_CANDIDATE',payload : candidate}
}

export const addAdminOtherCandidate = (otherCandidate) => {
    return {type : 'ADD_ADMIN_OTHER_CANDIDATE',payload : otherCandidate}
}

export const addAdminData = (admin) => {
    return {type : 'ADD_ADMIN_DATA',payload : admin}
}

export const startLoginUser = (obj) => {
    return(dispatch)=>{
        axios.post('/users/login',obj.formData)
            .then((response)=>{
                if(response.data.token){
                    const token = response.data.token
                    localStorage.setItem('film-token',token)
                    axios.get('/users/account',{
                        headers : {
                            'x-auth' : localStorage.getItem('film-token')
                        }
                    })
                    .then((response)=>{
                        if(response.data._id){
                            dispatch(addUser(response.data))
                            Swal.fire(
                                'Success',
                                'Logged in successfully',
                                'success'
                            )     
                            if(response.data.role == "director"){
                                axios.get('/director',{
                                    headers : {
                                        'x-auth' : localStorage.getItem('film-token')
                                    }
                                })
                                .then((response)=>{
                                    dispatch(addDirector(response.data))
                                    window.location.href = '/director'
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                                
                            }
                            else if(response.data.role == "candidate"){
                                axios.get('/candidate',{
                                    headers : {
                                        'x-auth' : localStorage.getItem('film-token')
                                    }
                                })
                                    .then((response)=>{
                                        dispatch(addCandidate(response.data))
                                        window.location.href = '/candidate'
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    })
                               
                            }
                            else if(response.data.role == "otherCandidate"){
                                axios.get('/candidate',{
                                    headers : {
                                        'x-auth' : localStorage.getItem('film-token')
                                    }
                                })
                                    .then((response)=>{
                                        dispatch(addOtherCandidate(response.data))
                                        window.location.href = '/otherCandidate'
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    })
                            }
                            else if(response.data.role == "admin"){
                                Promise.all([axios.get('/admin/director'),axios.get('/admin/candidate'),axios.get('/admin/otherCandidate'),axios.get('/admin',{headers:{'x-auth':localStorage.getItem('film-token')}})])
                                .then((response)=>{
                                   const [director,candidate,otherCandidate,admin]=response
                                   dispatch(addAdminDirecrtor(director.data))
                                   dispatch(addAdminCandidate(candidate.data))
                                   dispatch(addAdminOtherCandidate(otherCandidate.data))
                                   dispatch(addAdminData(admin.data))
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                                window.location.href = '/admin'
                            }
                        }
                        else{
                            Swal.fire(
                                'Error',
                                 response.data,
                                'error'
                            )
                        }

                    })
                }
                else{
                    Swal.fire(
                        'Error',
                         response.data,
                        'error'
                    )
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startLogoutUser = () =>{
    return(dispatch)=>{
        axios.delete('/users/logout',
        {
            headers : {
                'x-auth' : localStorage.getItem('film-token')
            }
        })
        .then((response)=>{
            localStorage.removeItem('film-token')
            Swal.fire(
                'Success',
                'Logout in successfully',
                'success'
            )     
            window.location.href = '/'
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}