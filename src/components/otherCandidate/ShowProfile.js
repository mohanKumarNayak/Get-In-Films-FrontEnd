import React from 'react'
import {connect} from 'react-redux'
import { MDBContainer } from 'mdbreact'
import { Link } from 'react-router-dom'

function ShowProfileOtherCandidate(props){
    return(
        <MDBContainer>
            <br /><br /><br />
            <h3 className="display-4" style={{fontWeight:"400"}}>otherCandidate Profile</h3><hr />
            <h4 className="display-4" style={{fontSize : "35px"}}>Name - {props.otherCandidate ? props.otherCandidate.fullname : 'loading'}</h4>
            <h4 className="display-4" style={{fontSize : "35px"}}>age - {props.otherCandidate ? props.otherCandidate.age : 'loading'}</h4>
            <h4 className="display-4" style={{fontSize : "35px"}}>gender - {props.otherCandidate ? props.otherCandidate.gender : 'loading'}</h4>
            <h4 className="display-4" style={{fontSize : "35px"}}>Talent-In - {props.otherCandidate ? props.otherCandidate.talentIn : 'loading'}</h4>
            <h4 className="display-4" style={{fontSize : "35px"}}>Mobile - {props.otherCandidate ? props.otherCandidate.mobile : 'loading'}</h4>
            <h4 className="display-4" style={{fontSize : "35px"}}>Email - {props.otherCandidate ? props.otherCandidate.email : 'loading'}</h4>
            <h4 className="display-4" style={{fontSize : "35px"}}>Address - {props.otherCandidate ? props.otherCandidate.address : 'loading'}</h4>
            <h4 className="display-4" style={{fontSize : "35px"}}>Experience - {props.otherCandidate ? props.otherCandidate.experience : 'loading'} years</h4>
            <Link className="btn btn-info" to={`/othercandidate/profile/${props.otherCandidate._id}`}>edit profile</Link>
        </MDBContainer>
    )
}

const mapStateToProps = (state) => {
    return {
         otherCandidate : state.otherCandidate
    }
}

export default connect(mapStateToProps)(ShowProfileOtherCandidate)