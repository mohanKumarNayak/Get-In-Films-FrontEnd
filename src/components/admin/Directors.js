import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDataTable,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter  } from 'mdbreact'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { startRemoveDirector } from '../../actions/adminAction'

class Directors extends React.Component{
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
            text: "You want to delete the director",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
          }).then((result)=>{
              if(result.value){
                this.props.dispatch(startRemoveDirector(id))
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
    
            rows : this.props.adminDirector && this.props.adminDirector.map(director=>{
                return {
                    name : director.fullname,
                    email : director.email,
                    mobile : director.mobile,
                    info : <MDBBtn size="sm" onClick={()=>this.handleInfo(director.user)}>info</MDBBtn>,
                    remove : <MDBBtn size="sm" color="danger" onClick={()=>this.handleRemove(director.user)}>Remove</MDBBtn>
                }
            }),
            
          };
    return(
        <MDBContainer>
             <MDBModal isOpen={this.state.modal} toggle={()=>{this.handleInfo('')}}>
                <MDBModalHeader toggle={()=>{this.handleInfo('')}}>Director Details</MDBModalHeader>
                <MDBModalBody>
                {
                    this.props.adminDirector && this.props.adminDirector.filter(director=>director.user == this.state.id).map(director=>{
                        return (
                            <div key={director.user}>
                                <h2 className="text-center display-4">{director.fullname} </h2>
                                <h2>Email - {director.email} </h2>
                                <h2>Mobile - {director.mobile} </h2>
                                <h2>Age - {director.age} </h2>
                                <h2>Gender - {director.gender} </h2>
                                <h2>Address - {director.address} </h2>
                                <hr />
                                <h2 className="text-center display-4" style={{fontSize : "40px"}}>Movie Details</h2>
                                <h2>Movie Name - {director.newMovie.movieName} </h2>
                                <h2>Producer - {director.newMovie.producerName} </h2>
                                <h2>Language - {director.newMovie.language} </h2>
                                <h2>Movie Type - {director.newMovie.movieType} </h2>
                                <h2>Required - {director.newMovie.required} </h2>
                                <hr />
                                <h2 className="text-center display-4" style={{fontSize : "40px"}}>Auditions Applied Details</h2>
                                <h2>Candidates - {director.candidates.length} </h2>
                                <h2>Other Candidates - {director.otherCandidates.length} </h2>
                                <hr />
                                <h2 className="text-center display-4" style={{fontSize : "40px"}}>Selected Members</h2>
                                <h2>Candidates - {director.planCandidates.length} </h2>
                                <ul>
                                    {
                                        director.planCandidates.map(plan=>{
                                            return (
                                                <li><h3>{plan.name}</h3></li>
                                            )
                                        })
                                    }
                                </ul>
                                <h2>Other Candidates - {director.planOtherCandidate.length} </h2>
                                <ul>
                                    {
                                        director.planOtherCandidate.map(plan=>{
                                            return (
                                                <li><h3>{plan.name}</h3></li>
                                            )
                                        })
                                    }
                                </ul>
                                 
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
                <h2 className="display-4 text-center" >Listing Directors - {this.props.adminDirector && this.props.adminDirector.length} </h2>
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
        adminDirector : state.adminDirector
    }
}

export default connect(mapStateToProps)(Directors)