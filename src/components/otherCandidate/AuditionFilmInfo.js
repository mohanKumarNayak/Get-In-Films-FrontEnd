import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { startAddOtherCandidatesToDirector} from '../../actions/directorAction'
import { startAddMovieToOtherCandidate} from '../../actions/otherCandidateAction'
import Swal from 'sweetalert2'
 
class AuditionFilmInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show : false
        }
    }

    handleButton = () => {
        this.setState((prevState)=>{
            return{
                show : !prevState.show
            }
        })
    }

    handleApplyAudition = () => {
        const otherCandidateDetails = {
            otherCandidate : this.props.otherCandidate._id,
            name : this.props.otherCandidate.fullname,
            age : this.props.otherCandidate.age,
            email : this.props.otherCandidate.email,
            mobile : this.props.otherCandidate.mobile,
            gender : this.props.otherCandidate.gender,
            talentIn : this.props.otherCandidate.talentIn

        }
        const movieDetails = {
            movieName : this.props.newMovie.newMovie.movieName,
            director : this.props.newMovie.director,
            language : this.props.newMovie.newMovie.language,
            producerName : this.props.newMovie.newMovie.producerName,
            movieType : this.props.newMovie.newMovie.movieType,
            required : this.props.newMovie.newMovie.required
        }

        const id = this.props.directorInfo.id

        Swal.fire({
            title: 'Are you sure?',
            text: `Are you sure that you want apply for the audition`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Apply!'
          }).then((result)=>{
              if(result.value){
                this.props.dispatch(startAddOtherCandidatesToDirector({id : id,otherCandidateDetails}))
                this.props.dispatch(startAddMovieToOtherCandidate({movieDetails}))
              }
          })

      


        
    }

    render(){
        return(
            <div className="container">
                <br /><br /><br />
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="display-4 text-center">New Movie Details</h2>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-7">
                        <h2 className="display-4" style={{fontSize : "35px"}}>Movie Name - {this.props.newMovie && this.props.newMovie.newMovie.movieName} </h2>

                        {
                            this.props.otherCandidate && this.props.otherCandidate.movieApplied &&  this.props.otherCandidate.movieApplied.map(movie=>{return movie.movieName}).includes(this.props.newMovie.newMovie.movieName) ? <h2 className="display-4" style={{fontSize : "35px",fontWeight:"400"}}>Audition Applied</h2> : <button className="btn btn-primary" onClick={this.handleApplyAudition}>apply for audition</button>
                        }
                                
                        
                        <br /><br />
                        <button className="btn btn-info" onClick={this.handleButton}>More About {this.props.newMovie && this.props.newMovie.director} </button>
                    {
                      this.state.show 
                      &&  <div>
                        <hr />
                        <h2 className="display-4" style={{fontSize : "35px",fontWeight:"400"}}>Director Information</h2>
                        <h2 className="display-4" style={{fontSize : "30px"}}>Name - {this.props.directorInfo && this.props.directorInfo.name} </h2>
                        <h2 className="display-4" style={{fontSize : "30px"}}>Email - {this.props.directorInfo && this.props.directorInfo.email} </h2>
                        <h2 className="display-4" style={{fontSize : "30px"}}>Mobile - {this.props.directorInfo && this.props.directorInfo.mobile} </h2>
                        <h2 className="display-4" style={{fontSize : "30px"}}>Address - {this.props.directorInfo && this.props.directorInfo.address} </h2>
                        <h2 className="display-4" style={{fontSize : "30px"}}>Experience - {this.props.directorInfo && this.props.directorInfo.experience} </h2>
                        <h2 className="display-4" style={{fontSize : "30px"}}>Total Movies - {this.props.directorInfo && this.props.directorInfo.totalMovies} </h2>
                        <h2 className="display-4" style={{fontSize : "30px"}}>Age - {this.props.directorInfo && this.props.directorInfo.age} </h2>
                        <h2 className="display-4" style={{fontSize : "30px"}}>Gender - {this.props.directorInfo && this.props.directorInfo.gender} </h2>
                        <hr />
                        </div>

                        

                    }
                        
                        

                    </div>
                    <div className="col-md-5">
                    <h2 className="display-4" style={{fontSize : "35px",fontWeight:"400"}}>Movie Information</h2>
                        <h2 className="display-4" style={{fontSize : "35px"}}>Director - {this.props.newMovie && this.props.newMovie.director} </h2>
                        <h2 className="display-4" style={{fontSize : "35px"}}>Producer - {this.props.newMovie && this.props.newMovie.newMovie.producerName} </h2>
                        <h2 className="display-4" style={{fontSize : "35px"}}>Language - {this.props.newMovie && this.props.newMovie.newMovie.language} </h2>
                        <h2 className="display-4" style={{fontSize : "35px"}}>Movie Type - {this.props.newMovie && this.props.newMovie.newMovie.movieType} </h2>
                        <h2 className="display-4" style={{fontSize : "35px"}}>Required - {this.props.newMovie && this.props.newMovie.newMovie.required} </h2>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return{
        newMovie : state.newMovies.find(movie=>movie.id == id),
        directorInfo : state.allDirectorInfo.find(director=>director.id == id),
        otherCandidate : state.otherCandidate
        
        

    }
}

export default withRouter(connect(mapStateToProps)(AuditionFilmInfo))