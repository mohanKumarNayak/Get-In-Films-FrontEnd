import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDataTable,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { startRemoveCandidate } from '../../actions/adminAction'

class Candidates extends React.Component{
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
            text: "You want to delete the Candidate",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
          }).then((result)=>{
              if(result.value){
                this.props.dispatch(startRemoveCandidate(id))
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
    
            rows : this.props.adminCandidate && this.props.adminCandidate.map(candidate=>{
                return {
                    name : candidate.fullname,
                    email : candidate.email,
                    mobile : candidate.mobile,
                    info : <MDBBtn size="sm" onClick={()=>this.handleInfo(candidate.user)}>info</MDBBtn>,
                    remove : <MDBBtn size="sm" color="danger" onClick={()=>this.handleRemove(candidate.user)}>Remove</MDBBtn>
                }
            }),
            
          };
    return(
        <MDBContainer>
            <MDBModal isOpen={this.state.modal} toggle={()=>{this.handleInfo('')}}>
                <MDBModalHeader toggle={()=>{this.handleInfo('')}}>Candidate Details</MDBModalHeader>
                <MDBModalBody>
                {
                    this.props.adminCandidate && this.props.adminCandidate.filter(candidate=>candidate.user == this.state.id).map(candidate=>{
                        return (
                            <div key={candidate.user}>
                                <h2 className="text-center display-4">{candidate.fullname} </h2>
                                <h2>Email - {candidate.email} </h2>
                                <h2>Mobile - {candidate.mobile} </h2>
                                <h2>Age - {candidate.age} </h2>
                                <h2>Gender - {candidate.gender} </h2>
                                <h2>Address - {candidate.address} </h2>
                                <h2>No of Auditions Applied - {candidate.movieApplied.length} </h2>
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
                <h2 className="display-4 text-center" >Listing Candidates - {this.props.adminCandidate && this.props.adminCandidate.length} </h2>
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
        adminCandidate : state.adminCandidate
    }
}

export default connect(mapStateToProps)(Candidates)