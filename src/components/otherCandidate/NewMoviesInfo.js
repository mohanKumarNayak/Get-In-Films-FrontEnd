import React from 'react'
import {connect} from 'react-redux'
import {startAddNewMoviesOthers,startAddAllDirectorInfoOtherCandidates} from '../../actions/otherCandidateAction'
import {MDBCol,MDBRow,MDBContainer} from 'mdbreact'
import {Link} from 'react-router-dom'

class NewMoviesInfo extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        if(this.props.newMovies.length == 0){
            this.props.dispatch(startAddNewMoviesOthers())
            this.props.dispatch(startAddAllDirectorInfoOtherCandidates())
        }
        return(
            <MDBContainer>
            <br /><br /><br />
            <MDBRow>
                <MDBCol md="12">
            <h3 className="display-4" align="center" style={{fontWeight:"400"}}>Auditions Available</h3><hr />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="8">
                    {
                        this.props.newMovies && this.props.newMovies.filter(movie=>movie).map((movie,i)=>{
                            return (
                                <div key={i+'othercandidateKey'}>
                                <MDBRow>
                                    <MDBCol md="8" style={{border:"1px solid black"}}>
                                    <h2 className="text-center">Movie Name - {movie.newMovie.movieName} </h2>
                                    <hr />
                                    <h3>Director - {movie.director} </h3>
                                    <h3>Producer - {movie.newMovie.producerName} </h3>
                                    <h3>Language - {movie.newMovie.language} </h3>
                                    <h3>Type - {movie.newMovie.movieType} </h3>
                                    </MDBCol>
                                    <MDBCol md="4" style={{border:"1px solid black"}}>
                                        <h2 className="text-center">Required</h2>
                                        <ul>
                                            {
                                                movie.newMovie.required.split(',').map((req,i)=>{
                                                    return (
                                                        <li key={req+i}><h4>{req}</h4></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <Link to={`/otherCandidate/castingCalls/${movie.id}`} className="btn btn-primary btn-block" style={{borderRadius:"60px"}}>info</Link>
                                    </MDBCol>
                                </MDBRow>
                                <br />
                                </div>
                            )
                        })
                    }
                </MDBCol>
            </MDBRow>
            
        </MDBContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newMovies : state.newMovies 
    }
}

export default connect(mapStateToProps)(NewMoviesInfo)
