import React from 'react'
import {connect} from 'react-redux'
import ShowMovieInfo from './ShowMovieInfo'
import FormMovieInfo from './FormMovieInfo'

function MoviePage(props){
    return(
        <div>
            {
                props.director.newMovie && props.director.newMovie.added == "empty" ? <FormMovieInfo /> : <ShowMovieInfo />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        director : state.director
    }
}

export default connect(mapStateToProps)(MoviePage)
