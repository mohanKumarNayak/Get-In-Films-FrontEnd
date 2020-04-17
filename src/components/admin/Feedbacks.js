import React from 'react'
import { connect } from 'react-redux'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

function FeedbackAdmin(props){
return(
    <MDBContainer>
        <br /><br /><br />
        <MDBRow>
            <MDBCol md="12">
                <h2 className="display-4 text-center">Total Feedbacks - {props.admin.contact && props.admin.contact.length} </h2>
                <hr />
            </MDBCol>
        </MDBRow>
        <MDBRow>
            {
                props.admin.contact && props.admin.contact.map(user=>{
                    return(
                        <MDBCol key={user._id+'id'} md="8" style={{border : "1px solid black"}}>
                            <h2>Name - {user.name} </h2>
                            <h4>Email - {user.email} </h4>
                            <h4>Subject - {user.subject} </h4>
                            <h4>Message - {user.body} </h4>
                        </MDBCol>
                       
                    )
                })
            }
        </MDBRow>

    </MDBContainer>
)
}

const mapStateToProps = (state) => {
    return{
       admin : state.admin
    }
}

export default connect(mapStateToProps)(FeedbackAdmin)