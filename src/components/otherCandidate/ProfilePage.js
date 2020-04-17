import React from 'react'
import {connect} from 'react-redux'
import ShowProfileOtherCandidate from '../otherCandidate/ShowProfile'
import FormPageOtherCandidate from './FormPage'

function ProfilePageOtherCandidate(props){
    return(
        <div>
            {
                props.otherCandidate && props.otherCandidate.profile == "empty" ? <FormPageOtherCandidate /> : <ShowProfileOtherCandidate /> 
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        otherCandidate : state.otherCandidate
    }
}

export default connect(mapStateToProps)(ProfilePageOtherCandidate)