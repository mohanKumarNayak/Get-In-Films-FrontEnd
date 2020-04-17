import React from 'react'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'
import {startUpdateOtherCandidateStatus} from '../../actions/allPlanAction'
import {MDBRow, MDBContainer,MDBCard, MDBCardBody, MDBIcon, MDBCol, MDBCardImage, MDBView, MDBMask, MDBCardTitle, MDBCardText } from 'mdbreact'
import pic1 from '../../images/pic1.jpeg'
import pic3 from '../../images/pic3.jpg'
import pic4 from '../../images/pic4.jpg'

function PlanCandidate(props){
    props.allPlanOtherCandidate && props.allPlanOtherCandidate.forEach(ids=>{
        ids.forEach(id=>{
            props.refss.push(id)
        })
    })

    const handleClick = (obj) => {
        const planId = {
            planId : obj.planId
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "You Want to accept the offer from the director!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Confirm!'
          }).then((result)=>{
              if(result.value){
                props.dispatch(startUpdateOtherCandidateStatus({id:obj.id,planId:planId}))
              }
          })
        
    }

    return(
        <MDBContainer>
            <br /><br /><br />
            
            <MDBRow>
                <MDBCol md="12">
                    <h2 className="display-4 text-center">Films Selected With Plan</h2>
                </MDBCol>
            </MDBRow>
            {
                props.allPlan && props.refss.includes(props.otherCandidate && props.otherCandidate._id) ? 
               props.allPlan.filter(plan=>{
                    return plan.planOtherCandidate.find(otherCandidate=>otherCandidate.otherCandidate == props.otherCandidate._id)
                }).map(plan=>{
                    return(
                        <MDBRow>
                            <MDBCol md="8">
                                <hr />
                                <h2 className="display-4 text-center" style={{fontSize:"40px"}}>Candidates selected for {plan.newMovie.movieName}</h2> 
                                    <MDBRow>
                                    {
                                        plan.planCandidates.map((candidate,i)=>{
                                            return(
                                                    <MDBCol md="5" key={candidate.id+'key'+i}>
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
                                                            
                                                            candidate.status == "pending" && <h2 className="display-4" style={{fontSize:"30px",fontWeight:"400"}}>Status Pending</h2>
                                                                            
                                                        }
                                                                
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                    </div>
                                            </MDBCol>
                                            )
                                        })
                                    } 
                            </MDBRow>
                            <MDBRow>
                                    <h2 className="display-4 text-center" style={{fontSize:"40px"}}>Others selected for 
                                    Selected for {plan.newMovie.movieName}</h2>       
                            </MDBRow>
                            <MDBRow>      
                                    {
                                        plan.planOtherCandidate.map((otherCandidate,i)=>{
                                            return(
                                                    <MDBCol md="5" key={otherCandidate.id+'key'+i}>
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
                                                                    otherCandidate.otherCandidate == props.otherCandidate._id ? (otherCandidate.status == "pending" && <button className="btn btn-success btn-block" onClick={()=>{handleClick({planId:otherCandidate._id,id:plan.id})}}>Accept</button>) : (otherCandidate.status == "pending" && <h2 className="display-4" style={{fontSize:"30px",fontWeight:"400"}}>Status Pending</h2>)
                                                                }
                                                            </MDBCardBody>
                                                    </MDBCard>
                                                    </div>
                                            </MDBCol>             
                                            
                                            )
                                        })
                                    }
                                </MDBRow>
                               
                                  
                            </MDBCol>
                                    <MDBCol md="4">
                                            <hr />
                                            <br />
                                                <h3 className="display-4" align="center" style={{fontSize : "50px",fontWeight : "300"}}>Movie Details</h3><hr />
                                                <h4 className="display-4" align="center" style={{fontSize : "35px"}}>Name - {plan.newMovie.movieName}</h4>
                                                <h4 className="display-4" align="center" style={{fontSize : "35px"}}>Language - {plan.newMovie.language}</h4>
                                                <h4 className="display-4" align="center" style={{fontSize : "35px"}}>Producer - {plan.newMovie.producerName }</h4>
                                                <h4 className="display-4" align="center" style={{fontSize : "35px"}}>Movie Type {plan.newMovie.movieType}</h4>
                                    </MDBCol>
                            <hr />
                        </MDBRow>
                    )
                })
                : <h2>Not selected</h2>
            }
        </MDBContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        allPlan : state.allPlan.filter(plan=>plan),
        allPlanOtherCandidate : state.allPlan && state.allPlan.filter(plan=>plan).map(plan=>{
           return plan.planOtherCandidate.map(otherCandidate=> otherCandidate.otherCandidate
            )
        }), 
        refss : [],
        otherCandidate : state.otherCandidate
    }
}

export default connect(mapStateToProps)(PlanCandidate)