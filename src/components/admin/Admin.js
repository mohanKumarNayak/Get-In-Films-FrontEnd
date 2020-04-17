import React from 'react'
import { connect } from 'react-redux'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

function AdminLogin(){
    return(
    <MDBContainer>
        <br /><br /><br />
        <MDBRow>
            <MDBCol>
                <h2 className="display-4 text-center">Welcome Admin</h2>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    )
}

export default AdminLogin