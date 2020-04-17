import React from 'react'
import {connect} from 'react-redux'
import ShowProfileDirector from './ShowProfile'
import FormProfile from './FormProfile'

function ProfilePageDirector(props){
    return(
        <div>
            {
                props.director && props.director.profile == "empty" ? <FormProfile /> : <ShowProfileDirector />         
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        director : state.director
    }
}

export default connect(mapStateToProps)(ProfilePageDirector)