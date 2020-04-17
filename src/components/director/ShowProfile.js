import React from 'react'
import {connect} from 'react-redux'
import { MDBContainer } from 'mdbreact'
import { Link } from 'react-router-dom'

function ShowProfileDirector(props){
    return(
        <MDBContainer>
            <br /><br /><br />
            <h3 className="display-4"  style={{fontWeight:"400"}}>Director Profile</h3><hr />
            <h4 className="display-4"  style={{fontSize : "35px"}}>Name - {props.director ? props.director.fullname : 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>age - {props.director ? props.director.age : 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>gender - {props.director ? props.director.gender : 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>Mobile - {props.director ? props.director.mobile : 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>Email - {props.director ? props.director.email: 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>Address - {props.director ? props.director.address : 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>Total Movies - {props.director ? props.director.totalMovies : 'loading'}</h4>
            <h4 className="display-4"  style={{fontSize : "35px"}}>Experience - {props.director ? props.director.experience : 'loading'} years</h4>
            <Link to={`/director/profile/${props.director._id}`} className="btn btn-info">edit Profile</Link>
        </MDBContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        director : state.director,
        user : state.user
    }
}

export default connect(mapStateToProps)(ShowProfileDirector)