import React from 'react'
import {startPostCandidate} from '../../actions/candidateAction'
import { connect } from 'react-redux'

class FormProfile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fullname : this.props.candidate ? this.props.candidate.fullname : '',
            age : this.props.candidate ? this.props.candidate.age : '',
            gender : this.props.candidate ? this.props.candidate.gender : '',
            mobile : this.props.candidate ? this.props.candidate.mobile : '',
            address : this.props.candidate ? this.props.candidate.address : '',
            experience : this.props.candidate ? this.props.candidate.experience : '',
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
            fullname : this.state.fullname,
            age : this.state.age,
            gender : this.state.gender,
            mobile : this.state.mobile,
            address : this.state.address,
            experience : this.state.experience,
            profile : 'filled'
        }

        this.props.dispatch(startPostCandidate({formData}))
    }

    render(){
        return(
            <div className="container">
                <br /><br /><br />
                {
                    this.props.candidate.profile == 'filled' ? <h2 className="display-4 text-center">Edit Profile</h2> : <h2 className="display-4 text-center">Add Profile</h2>
                }
                <hr />
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullname">fullname</label>
                    <input type="text" className="form-control" id="fullname" onChange={this.handleChange} value={this.state.fullname} name="fullname" />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="text" className="form-control" id="age" onChange={this.handleChange} value={this.state.age} name="age" />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" value={this.state.gender} className="form-control" name="gender" onChange={this.handleChange}>
                        <option key="one">select</option>
                        <option key="two" value="male">Male</option>
                        <option key="three" value="female">Female</option>
                        <option key="four" value="others">Others</option>  
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="number" className="form-control" id="mobile" onChange={this.handleChange} value={this.state.mobile} name="mobile" />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" onChange={this.handleChange} value={this.state.address} name="address" />
                </div>
                <div className="form-group">
                    <label htmlFor="experience">Experience</label>
                    <input type="number" className="form-control" id="experience" onChange={this.handleChange} value={this.state.experience} name="experience" />
                </div>
                
                
             
                
                
                
                <input type="submit" value="submit" className="btn btn-primary" />
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        candidate : state.candidate
    }
}

export default connect(mapStateToProps)(FormProfile)