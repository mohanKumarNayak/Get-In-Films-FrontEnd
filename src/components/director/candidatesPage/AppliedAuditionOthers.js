import React from 'react'
import {connect} from 'react-redux'
import {startAddPlanOtherCandidtes} from '../../../actions/directorAction'
import Swal from 'sweetalert2'
import { MDBRow, MDBContainer,MDBCard, MDBCardBody, MDBIcon, MDBCol, MDBCardImage, MDBView, MDBMask, MDBCardTitle, MDBCardText } from 'mdbreact'
import pic4 from '../../../images/pic4.jpg'

function AppliedAuditionOthers(props){
    const handleOtherCandidatePlan = (otherCandidate) => {
        const otherCandidateDetails = {
            otherCandidate : otherCandidate.otherCandidate,
            name : otherCandidate.name,
            age : otherCandidate.age,
            email : otherCandidate.email,
            mobile : otherCandidate.mobile,
            gender : otherCandidate.gender,
            talentIn : otherCandidate.talentIn
        }
        Swal.fire({
            title: 'Are you sure?',
            text: `Are you sure that you want to add ${otherCandidate.name} to your plan`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, ADD to Plan!'
          }).then((result)=>{
              if(result.value){
                props.dispatch(startAddPlanOtherCandidtes({otherCandidateDetails}))
              }
          })
        
        
    }
    return(
        <MDBContainer>
            <br /><br /><br />
            <MDBRow>
                <MDBCol md="12">
                    <h2 className="display-4 text-center">Other Candidates Applied for {props.director && props.director.newMovie && props.director.newMovie.movieName} </h2>
                    </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
                    {
                        props.director && props.director.otherCandidates && props.director.otherCandidates.map((otherCandidate,i)=>{
                            return (
                                    <MDBCol md="4" key={otherCandidate.id+'key'+i}>
                                    <div className="card-group my-5">
                                    <MDBCard key={otherCandidate.id+'key'+i}>
                                        <MDBView hover>
                                        <MDBCardImage
                                            top
                                            src={`${pic4}`}
                                            alt="MDBCard image cap"
                                        />
                                        </MDBView>
                                        <MDBCardBody>
                                            <MDBCardTitle>{otherCandidate.name}</MDBCardTitle>
                                        <MDBCardText>
                                        <p className="card-text">
                                        talent-In - {otherCandidate.talentIn}<br />
                                        email - {otherCandidate.email}<br />
                                        mobile - {otherCandidate.mobile}<br />
                                        gender - {otherCandidate.gender}<br />
                                        age - {otherCandidate.age}
                                        </p>
                                        </MDBCardText>
                                        <hr />
                                        {
                                                props.otherCandidatesReference && props.otherCandidatesReference.includes(otherCandidate.name) ? <h2 className="display-4" style={{fontSize:"30px",fontWeight : "300"}}>Added to Your Plan</h2> :    <button className="card-link btn btn-primary" onClick={()=>{handleOtherCandidatePlan(otherCandidate)}} className="card-link btn btn-success btn-block">Add to ur Plan</button>
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
        otherCandidatesReference : state.director && state.director.planOtherCandidate && state.director.planOtherCandidate.map(direct=>{
            return direct.name
        })
    }
}

export default connect(mapStateToProps)(AppliedAuditionOthers)