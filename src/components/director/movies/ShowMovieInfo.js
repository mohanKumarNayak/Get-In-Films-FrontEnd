import React from 'react'
import {connect} from 'react-redux'
import { MDBContainer } from 'mdbreact'

function ShowMovieInfo(props){
    return(
        <MDBContainer>
            <br /><br /><br />
            <h3 className="display-4" style={{fontWeight:"400"}}>New Movie Details</h3><hr />
            <h4 className="display-4" style={{fontSize : "35px"}}>Movie Name - {props.director.newMovie ? props.director.newMovie.movieName : 'loading'}</h4>
            <h4 className="display-4" style={{fontSize : "35px"}}>Language - {props.director.newMovie ?  props.director.newMovie.language : 'loading'}</h4>
            <h4 className="display-4" style={{fontSize : "35px"}}>Producer - {props.director.newMovie ? props.director.newMovie.producerName : 'loading'}</h4>
            <h4 className="display-4" style={{fontSize : "35px"}}>Movie Type - {props.director.newMovie ?  props.director.newMovie.movieType : 'loading'}</h4>
            <h4 className="display-4" style={{fontSize : "35px"}}>Required - {props.director.newMovie ?  props.director.newMovie.required : 'loading'}</h4>
            </MDBContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        director : state.director
    }
}

export default connect(mapStateToProps)(ShowMovieInfo)