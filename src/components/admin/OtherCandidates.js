import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDataTable,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { startRemoveOtherCandidate } from '../../actions/adminAction'

class OtherCandidates extends React.Component{
    constructor(props){
        super(props)
        this.state={
            modal : false,
            id : ''

        }
    }
    
    handleInfo = (id) =>{
        this.setState({
            modal : !this.state.modal,
            id : id
        })
    }
    handleRemove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete the Other Candidate",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
          }).then((result)=>{
              if(result.value){
                this.props.dispatch(startRemoveOtherCandidate(id))
              }
          })
    }
    
    render(){
        const data = {
            columns: [
              {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: 270
              },
              {
                label: 'Mobile',
                field: 'mobile',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Info',
                field: 'info',
                width: 150
              },
              {
                label: 'Remove',
                field: 'remove',
                width: 150
              },
            ],
    
            rows : this.props.adminOtherCandidate && this.props.adminOtherCandidate.map(otherCandidate=>{
                return {
                    name : otherCandidate.fullname,
                    email : otherCandidate.email,
                    mobile : otherCandidate.mobile,
                    info : <MDBBtn size="sm" onClick={()=>this.handleInfo(otherCandidate.user)}>info</MDBBtn>,
                    remove : <MDBBtn size="sm" color="danger" onClick={()=>this.handleRemove(otherCandidate.user)}>Remove</MDBBtn>
                }
            }),
            
          };
    return(
        <MDBContainer>
             <MDBModal isOpen={this.state.modal} toggle={()=>{this.handleInfo('')}}>
                <MDBModalHeader toggle={()=>{this.handleInfo('')}}>Other Candidate Details</MDBModalHeader>
                <MDBModalBody>
                {
                    this.props.adminOtherCandidate && this.props.adminOtherCandidate.filter(otherCandidate=>otherCandidate.user == this.state.id).map(otherCandidate=>{
                        return (
                            <div key={otherCandidate.user}>
                                <h2 className="text-center display-4">{otherCandidate.fullname} </h2>
                                <h2>Email - {otherCandidate.email} </h2>
                                <h2>Mobile - {otherCandidate.mobile} </h2>
                                <h2>Age - {otherCandidate.age} </h2>
                                <h2>Gender - {otherCandidate.gender} </h2>
                                <h2>Talent In - {otherCandidate.talentIn} </h2>
                                <h2>Address - {otherCandidate.address} </h2>
                                <h2>No of Auditions Applied - {otherCandidate.movieApplied.length} </h2>
                            </div>
                        )
                    })
                }
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color="secondary" onClick={()=>{this.handleInfo('')}}>Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
            <MDBRow>
                <MDBCol>
                <br /><br /><br />
                <h2 className="display-4 text-center" >Listing Other Candidates - {this.props.adminOtherCandidate && this.props.adminOtherCandidate.length} </h2>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                <MDBDataTable
                    striped
                    hover
                    data={data}
                    />

                </MDBCol>
            </MDBRow>

           
            
        </MDBContainer>
    )
}
}

const mapStateToProps = (state) =>{
    return{
        adminOtherCandidate : state.adminOtherCandidate
    }
}

export default connect(mapStateToProps)(OtherCandidates)