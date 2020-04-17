import React from "react";
import { connect } from  'react-redux';
import {startLoginUser} from '../../actions/userAction'
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbreact'
import { Link } from "react-router-dom";
import background1 from '../../images/background1.jpg'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email : '',
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
            email : this.state.email,
            password : this.state.password
        }
        const redirect = () => {
            return this.props.history.push('/')
        }
        this.props.dispatch(startLoginUser({formData,redirect}))
    }

    render(){
        return(
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12">
                        <br /><br /><br />
                            <h2 className="display-4 text-center" style={{fontWeight:"400"}}>Get In Films</h2>
                            <hr />
                        </MDBCol>
                        <MDBCol md="8">
                            <h2 className="display-4 text-center" style={{fontSize : "40px",fontWeight:"350"}}>Why Choose Get In Films</h2>
                            <p className="display-4" style={{fontSize : "20px"}}>Hey, wannabe famous? Fed up with your dead end job or just looking to earn extra cash? Maybe you are looking to kickstart a career in acting but dont know where to begin. Whatever your age, location or looks, there's a whole world of TV and film roles out there just waiting to be filled by someone just like you!</p>

                            <p className="display-4" style={{fontSize : "20px"}}>Here at Get In Films, we post out adults and kids casting calls for feature films, movies and TV shows each week which you can apply for. Most film and TV castings do not require any experience and anyone can join. You could land a lead role in a major film or have an experience on set as a film extra. Your acting career can rise from where you are now to stardom in no time at all given the right role in a film.</p>
                            
                            <p className="display-4" style={{fontSize : "20px"}}>Get In Film's audition for movies include major studio films, independent films, and student film productions.</p>

                            <p className="display-4" style={{fontSize : "20px"}}>New auditions are posted to Get In Films daily.</p>


                        </MDBCol>
                        <MDBCol md="4">
                        <form onSubmit={this.handleSubmit}>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text">
                            <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                success="right" onChange={this.handleChange} value={this.state.email} name="email" id="top"/>
                            <MDBInput label="Type your password" icon="lock" group type="password" validate onChange={this.handleChange} value={this.state.password} name="password" />
                            </div>
                            <div className="text-center">
                            <MDBBtn type="submit" color="success" className="btn-block" style={{borderRadius:"60px"}}>Login</MDBBtn>
                            </div>
                            <p className="text-center">or</p>
                            <p className="text-center"><Link to="/register">Register Your Account Here</Link></p>
                        </form>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md="8">
                            <h2 className="text-center display-4">Films available for Auditions</h2>
                            {
                                this.props.newMovies && this.props.newMovies.filter(movie=>movie).map((movie,i)=>{
                                    return (
                                        <div key={i+'keyLogin'}>
                                        <MDBRow>
                                            <MDBCol md="8" style={{border:"1px solid black"}}>
                                            <h2 className="text-center">Movie Name - {movie.newMovie.movieName} </h2>
                                            <hr />
                                            <h3>Director - {movie.director} </h3>
                                            <h3>Producer - {movie.newMovie.producerName} </h3>
                                            <h3>Language - {movie.newMovie.language} </h3>
                                            <h3>Type - {movie.newMovie.movieType} </h3>
                                            </MDBCol>
                                            <MDBCol md="4" style={{border:"1px solid black"}}>
                                                <h2 className="text-center">Required</h2>
                                                <ul>
                                                    {
                                                        movie.newMovie.required.split(',').map((req,i)=>{
                                                            return (
                                                                <li key={req+i}><h4>{req}</h4></li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <label className="btn btn-secondary" style={{borderRadius:"60px"}} htmlFor="top">Apply Audition</label>
                                            </MDBCol>
                                        </MDBRow>
                                        <br />
                                        </div>
                                    )
                                })
                            }

                        </MDBCol>
                    </MDBRow>
                    </MDBContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newMovies : state.newMovies
    }
}

export default connect(mapStateToProps)(Login)