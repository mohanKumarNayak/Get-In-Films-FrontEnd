import React from 'react'
import {connect} from 'react-redux'

function AuditionAppliedOthers(props){
    return(
        <div className="container">
            <br /><br /><br />
            <div className="row">
                <div className="col-md-12">
                    <h2 className="display-4 text-center">Auditions Applied</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Movie</th>
                                <th>Director</th>
                                <th>Producer</th>
                                <th>Language</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.otherCandidate.movieApplied && props.otherCandidate.movieApplied.map((movie,i)=>{
                                    return (
                                        <tr key={movie._id}>
                                            <td>{i+1} </td>
                                            <td>{movie.movieName}</td>
                                            <td>{movie.director} </td>
                                            <td>{movie.producerName} </td>
                                            <td>{movie.language} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        otherCandidate : state.otherCandidate
    }
}

export default connect(mapStateToProps)(AuditionAppliedOthers)