import React from 'react'
import {connect} from 'react-redux'
import {MDBRow, MDBContainer,MDBCard, MDBCardBody, MDBIcon, MDBCol, MDBCardImage, MDBView, MDBMask, MDBCardTitle, MDBCardText } from 'mdbreact'
import pic1 from '../../../images/pic1.jpeg'
import pic3 from '../../../images/pic3.jpg'
import pic4 from '../../../images/pic4.jpg'


function DirectorPlanPage(props){
    return(
        <MDBContainer>
            <br /><br /><br />
           <MDBRow>
                <MDBCol md="12">
                    <h2 className="display-4 text-center" style={{fontWeight : "400"}}>Selected for {props.director.newMovie && props.director.newMovie.movieName} </h2>
                    <hr />
                </MDBCol>
            </MDBRow>
                    {
                        props.director && props.director.planCandidates && props.director.planOtherCandidate && (props.director.planCandidates.length == 0  && props.director.planOtherCandidate.length == 0) ? <MDBRow>
                               <MDBCol md="12">
                                    <h2 className="display-4 text-center" style={{fontSize : "50px"}}>Add Either Candidates or Others to Activate your Plan</h2>
                                </MDBCol>
                                </MDBRow>: 
                        <MDBRow>
                           <MDBCol md="8">
                               
                                <h2 className="display-4 text-center" style={{fontSize : "50px",fontWeight : "300"}}>Main Candidates</h2>
                                <MDBRow>
                                {
                                    props.director.planCandidates && props.director.planCandidates.map((candidate,i)=>{
                                        return (
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
                                                <h4>status - {candidate.status} </h4>
                                                </MDBCardBody>
                                            </MDBCard>
                                            </div>
                                    </MDBCol>
                                        )
                                    })
                                }
                                </MDBRow>
                                <MDBRow>

                                <h2 className="display-4 text-center" style={{fontSize : "50px",fontWeight : "300"}}>Other Candidates</h2>
                                </MDBRow>
                                <MDBRow>
                                {
                                    props.director.planOtherCandidate && props.director.planOtherCandidate.map((otherCandidate,i)=>{
                                        return (
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
                                                <h4>status - {otherCandidate.status} </h4>
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
                                <h3 className="display-4" align="center" style={{fontSize : "50px",fontWeight : "300"}}>Movie Details</h3><hr />
                                <h4 className="display-4" align="center" style={{fontSize : "35px"}}>Name - {props.director.newMovie ? props.director.newMovie.movieName : 'loading'}</h4>
                                <h4 className="display-4" align="center" style={{fontSize : "35px"}}>Language - {props.director.newMovie ?  props.director.newMovie.language : 'loading'}</h4>
                                <h4 className="display-4" align="center" style={{fontSize : "35px"}}>Producer - {props.director.newMovie ? props.director.newMovie.producerName : 'loading'}</h4>
                                <h4 className="display-4" align="center" style={{fontSize : "35px"}}>Movie Type - {props.director.newMovie ?  props.director.newMovie.movieType : 'loading'}</h4>
                            </MDBCol>
                        </MDBRow>
                    }
                    <hr />
                    
            </MDBContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        director : state.director
    }
}

export default connect(mapStateToProps)(DirectorPlanPage)