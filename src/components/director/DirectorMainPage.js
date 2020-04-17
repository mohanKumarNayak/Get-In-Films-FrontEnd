import React from 'react'
import background1 from '../../images/background1.jpg'
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact'

function DirctorMainPage(){
    return(
        <div style={{backgroundImage : `url(${background1})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:"no-repeat",opacity:'0.7',width:'100%',height:'100vh'}}>
            <br /><br /><br />
            <MDBContainer>
            <MDBRow>
                <MDBCol md="12">
            <h2 className="display-4 font-weight-bold text-center" style={{color:'white'}}>Welcome to Director Page</h2>
                </MDBCol>
                <MDBCol md="8" className="offset-2">
            <p className="display-4 text-center" style={{fontSize : "20px",color:"white"}} >Here at Get In Films, we post out adults and kids casting calls for feature films, movies and TV shows each week which you can apply for. Most film and TV castings do not require any experience and anyone can join. You could land a lead role in a major film or have an experience on set as a film extra. Your acting career can rise from where you are now to stardom in no time at all given the right role in a film.</p>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default DirctorMainPage