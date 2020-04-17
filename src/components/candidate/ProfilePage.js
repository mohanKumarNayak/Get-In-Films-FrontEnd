import React from 'react'
import {connect} from 'react-redux'
import ShowProfile from './ShowProfile'
import FormProfile from './FormProfile'

function ProfilePage(props){
    return(
        <div>
            {
                props.candidate && props.candidate.profile == "empty" ? <FormProfile /> : <ShowProfile />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        candidate : state.candidate
    }
}

export default connect(mapStateToProps)(ProfilePage)