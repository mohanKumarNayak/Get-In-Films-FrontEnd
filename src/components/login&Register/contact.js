import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import {addFeedBackToAdmin} from '../../actions/adminAction'
import { connect } from "react-redux";

class ContactPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            subject : '',
            body : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name : this.state.name,
            email : this.state.email,
            subject : this.state.subject,
            body : this.state.body
        }

        this.props.dispatch(addFeedBackToAdmin(formData))

        this.setState({
            name : '',
            email : '',
            subject : '',
            body : ''
        })
    }

    
render(){
  return (
    <MDBContainer>
        <br /><br /><br />
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form onSubmit={this.handleSubmit}>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text"
                   id="contact-name"
                    label="Your name"
                    value = {this.state.name}
                    name='name'
                    onChange = {this.handleChange} />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-email"
                    label="Your email"
                    value = {this.state.email}
                    name='email'
                    onChange = {this.handleChange}
                    
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text"
                   id="contact-subject" 
                   label="Subject"
                   value = {this.state.subject}
                   name='subject'
                   onChange = {this.handleChange} />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                    value = {this.state.body}
                    name='body'
                    onChange = {this.handleChange}
                  />
                </div>
                <div className="text-center text-md-left">
                    <MDBBtn color="primary" size="md" type="submit">
                    Send
                    </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          
        </MDBCol>
      
        <MDBCol md="3" className="text-center">
        <br /> <br />
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>Bangalore, India</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p>+91 9740283754</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p>mohannayak619@gmail.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
}

export default connect()(ContactPage);