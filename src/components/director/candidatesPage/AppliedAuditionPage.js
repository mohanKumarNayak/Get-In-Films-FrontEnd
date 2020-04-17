import React from 'react'
import {connect} from 'react-redux'
import {startAddPlanCandidates} from '../../../actions/directorAction'
import Swal from 'sweetalert2'
import { MDBRow, MDBContainer,MDBCard, MDBCardBody, MDBIcon, MDBCol, MDBCardImage, MDBView, MDBMask, MDBCardTitle, MDBCardText } from 'mdbreact'
import pic1 from '../../../images/pic1.jpeg'
import pic3 from '../../../images/pic3.jpg'


function AppliedAuditionPage(props){
    const hadleCandidatePlan = (candidate) => {
        const candidateDetails = {
            candidate : candidate.candidate,
            name : candidate.name,
            age : candidate.age,
            email : candidate.email,
            mobile : candidate.mobile,
            gender : candidate.gender
        }
        Swal.fire({
            title: 'Are you sure?',
            text: `Are you sure that you want to add ${candidate.name} to your plan`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, ADD to Plan!'
          }).then((result)=>{
              if(result.value){
                props.dispatch(startAddPlanCandidates({candidateDetails}))
              }
          })
        
    }
    return(
        <MDBContainer>
            <br /><br /><br />
            <MDBRow>
                <MDBCol md="12">
                    <h2 className="display-4 text-center">Candidates Applied for {props.director && props.director.newMovie && props.director.newMovie.movieName} </h2>
                    </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
                
                    {
                        props.director && props.director.candidates && props.director.candidates.map((candidate,i)=>{
                            return (
                                <MDBCol md="4" key={candidate.id+'key'+i}>
                                    <div className="card-group my-5">
                                    <MDBCard key={candidate.id+'key'+i}>
                                        <MDBView hover>
                                        <MDBCardImage
                                            top
                                            src={candidate.gender == "male" ? `${pic1}` : `${pic3}`}
                                            alt="MDBCard image cap"
                                        />
                                        </MDBView>
                                        <MDBCardBody>
                                            <MDBCardTitle>{candidate.name}</MDBCardTitle>
                                        <MDBCardText>
                                        <p className="card-text">email - {candidate.email}<br />
                                        mobile - {candidate.mobile}<br />
                                        gender - {candidate.gender}<br />
                                        age - {candidate.age}
                                        </p>
                                        </MDBCardText>
                                        <hr />
                                        {
                                            props.candidatesReference && props.candidatesReference.includes(candidate.name) ? <h2 className="display-4" style={{fontSize:"30px",fontWeight : "300"}}>Added to Your Plan</h2> : <button className="card-link btn btn-success btn-block" onClick={()=>{hadleCandidatePlan(candidate)}}>Add to ur Plan</button>
                                        }
                                        </MDBCardBody>
                                    </MDBCard>
                                    </div>
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
        director : state.director,
        candidatesReference : state.director && state.director.planCandidates && state.director.planCandidates.map(direct=>{
            return direct.name
        })
    }
}

export default connect(mapStateToProps)(AppliedAuditionPage)