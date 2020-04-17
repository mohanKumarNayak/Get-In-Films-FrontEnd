import React from 'react'
import { startRegisterUser } from '../../actions/userAction'
import {connect} from 'react-redux'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBFormInline, MDBIcon} from 'mdbreact'

class RegisterForm extends React.Component{
    constructor(){
        super()
        this.state = {
            username : '',
            email : '',
            role : '',
            password : ''
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
            username : this.state.username,
            email : this.state.email,
            role : this.state.role,
            password : this.state.password
        }
        const redirect = () => {
            return this.props.history.push('/')
        }

        this.props.dispatch(startRegisterUser({formData,redirect}))
    }

    render(){
        return(    
            <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6" className="offset-md-3">
                        <br /><br /><br />
                        <form onSubmit={this.handleSubmit}>
                            <p className="text-center display-4" style={{fontSize :"40px"}}>Register Your Account Here</p><hr />
                            <div className="grey-text">
                            <MDBInput label="Enter your username" icon="user" group type="text" validate error="wrong"
                                success="right" onChange={this.handleChange} value={this.state.username} name="username" />
                            <MDBInput label="Enter your email" icon="envelope" group type="email" validate error="wrong"
                                success="right" onChange={this.handleChange} value={this.state.email} name="email"/>
                            <MDBInput label="Enter your password" icon="lock" group type="password" validate onChange={this.handleChange} value={this.state.password} name="password"/>
                            <label style={{fontWeight:"400",color:"black",fontSize:"25px"}}><MDBIcon icon="users" /> Select your Role</label>
                            <MDBFormInline>
                                <MDBInput
                                onClick={this.handleChange}
                                label='Director'
                                type='radio'
                                value="director"
                                id='radio1'
                                name="role"
                                containerClass='mr-5'
                                />
                                <MDBInput
                                onClick={this.handleChange}
                                label='Candidate'
                                type='radio'
                                value="candidate"
                                id='radio2'
                                name="role"
                                containerClass='mr-5'
                                />
                                <MDBInput
                                onClick={this.handleChange}
                                label='Other Candidate'
                                type='radio'
                                value="otherCandidate"
                                id='radio3'
                                name="role"
                                containerClass='mr-5'
                                />
                            </MDBFormInline>
                            </div>
                            <div className="text-center">
                            <MDBBtn color="success" type="submit" className="btn-block" style={{borderRadius : "60px"}}>Register</MDBBtn>
                            </div>
                        </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                
        )
    }
}

export default connect()(RegisterForm)