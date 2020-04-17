import React from 'react'
import {connect} from 'react-redux'
import { MDBContainer } from 'mdbreact'
import { Link } from 'react-router-dom'

function ShowProfile(props){
    return(
        <MDBContainer>
            <br /><br /><br />
            <h3 className="display-4"  style={{fontWeight:"400"}}>Candidate Profile</h3><hr />
            <h4 className="display-4"  style={{fontSize : "35px"}}>Name - {props.candidate ? props.candidate.fullname : 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>age - {props.candidate ? props.candidate.age : 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>gender - {props.candidate ? props.candidate.gender : 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>Mobile - {props.candidate ? props.candidate.mobile : 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>Email - {props.candidate ? props.candidate.email: 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>Address - {props.candidate ? props.candidate.address : 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>Experience - {props.candidate ? props.candidate.experience : 'loading'} years</h4>
            <Link to={`/candidate/profile/${props.candidate._id}`} className="btn btn-info">Edit profile</Link>
            </MDBContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        candidate : state.candidate,
        user : state.user
    }
}

export default connect(mapStateToProps)(ShowProfile)