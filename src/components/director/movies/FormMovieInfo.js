import React from 'react'
import {connect} from 'react-redux'
import {startAddNewMovies } from '../../../actions/directorAction'

class FormMovieInfo extends React.Component{
    constructor(){
        super()
        this.state = {
            movieName : '',
            producerName : '',
            movieType : '',
            language : '',
            required : ''
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
            newMovie : {
                movieName : this.state.movieName,
                producerName : this.state.producerName,
                movieType : this.state.movieType,
                language : this.state.language,
                added : 'added',
                required : this.state.required
            }
        }
        this.props.dispatch(startAddNewMovies({formData}))
    }

    render(){
        return(
            <div>
                 <div className="container">
                 <br /><br /><br />
                 <h2 className="display-4 text-center">Add Movie</h2>
                 <hr />
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="movieName">Movie Name</label>
                    <input type="text" className="form-control" id="movieName" onChange={this.handleChange} value={this.state.movieName} name="movieName" />
                </div>
                <div className="form-group">
                    <label htmlFor="producerName">Producer Name</label>
                    <input type="text" className="form-control" id="producerName" onChange={this.handleChange} value={this.state.producerName} name="producerName" />
                </div>
                <div className="form-group">
                    <label htmlFor="movieType">Movie Type</label>
                    <input type="text" className="form-control" id="movieType" onChange={this.handleChange} value={this.state.movieType} name="movieType" />
                </div>    
                <div className="form-group">
                    <label htmlFor="language">Language</label>
                    <input type="text" className="form-control" id="language" onChange={this.handleChange} value={this.state.language} name="language" />
                </div> 
                <div className="form-group">
                    <label htmlFor="required">Requirement</label>
                    <input type="text" className="form-control" id="required" onChange={this.handleChange} value={this.state.required} name="required" />
                </div>           
                <input type="submit" value="submit" className="btn btn-primary" />
            </form>
        </div>
            </div>
        )
    }
}

export default connect()(FormMovieInfo)