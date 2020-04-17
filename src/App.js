import React from 'react';
import MainPage from './components/login&Register/MainPage'
import {BrowserRouter,Link,Route,Switch,Redirect} from 'react-router-dom'
import RegisterForm from './components/login&Register/RegisterPage'
import Login from './components/login&Register/Login';
import {connect} from 'react-redux'
import DirectorMainPage from './components/director/DirectorMainPage'
import CandidateMainPage from './components/candidate/CandidateMainPage'
import OtherCandidateMainPage from './components/otherCandidate/OtherCandidatePage';
import Swal from 'sweetalert2'
import {MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBCol, MDBRow, MDBFooter } from 'mdbreact'
import {startLogoutUser} from './actions/userAction'
import ProfilePage from './components/candidate/ProfilePage'
import ProfilePageDirector from './components/director/ProfilePage'
import ProfilePageOtherCandidate from './components/otherCandidate/ProfilePage'
import MoviePage from './components/director/movies/MoviePage'
import NewMovies from './components/candidate/NewMovies'
import AuditionMovieInfo from './components/candidate/AuditionMovieInfo'
import AppliedAuditionPage from './components/director/candidatesPage/AppliedAuditionPage'
import NewMoviesInfo from './components/otherCandidate/NewMoviesInfo'
import AuditionFilmInfo from './components/otherCandidate/AuditionFilmInfo'
import AppliedAuditionOthers from './components/director/candidatesPage/AppliedAuditionOthers'
import DirectorPlanPage from './components/director/Plans/DirectorPlanPage'
import AppliedAuditions from './components/candidate/AppliedAuditions'
import AuditionAppliedOther from './components/otherCandidate/AuditionAppliedOther'
import PlansCandidate from './components/candidate/PlansCandidate'
import PlanOthersCandidate from './components/otherCandidate/PlanOthersCandidate'
import AdminPage from './components/admin/Admin'
import PlayGround from './components/login&Register/playground'
import Candidates from './components/admin/Candidates'
import Directors from './components/admin/Directors'
import OtherCandidates from './components/admin/OtherCandidates'
import FormProfile from  './components/director/FormProfile'
import FormMovieInfo from './components/director/movies/FormMovieInfo'
import FormProfileCandidate from './components/candidate/FormProfile'
import FormPageOther from './components/otherCandidate/FormPage'
import ContactPage from './components/login&Register/contact'
import FeedbacksAdmin from './components/admin/Feedbacks'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to log-out from your account!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Log out!'
    }).then((result)=>{
        if(result.value){
          this.props.dispatch(startLogoutUser())
        }
    })
  }

  render(){
  return (
    <BrowserRouter>
    <div>
      {
        Object.keys(this.props.user).length > 0 ? (<div>
          
          {
            this.props.user.role == "director" && 
           <MDBNavbar color="indigo" dark expand="md" scrolling fixed="top">
                <MDBNavbarBrand href="/">
                    <strong>Get In Films</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                  <MDBNavbarNav left>
                  <MDBNavItem>
                      <MDBNavLink to="/director/profile">Profile</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/director/movie">Movie</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/director/candidates">Candidate</MDBNavLink>
                    </MDBNavItem> 
                    <MDBNavItem>
                      <MDBNavLink to="/director/otherCandidates">Other Candidate</MDBNavLink>
                    </MDBNavItem> 
                    <MDBNavItem>
                      <MDBNavLink to="/director/plans">Plans</MDBNavLink>
                    </MDBNavItem> 
                    <MDBNavItem>
                      <MDBNavLink onClick={this.handleLogout} to="/logout">Logout</MDBNavLink>
                    </MDBNavItem> 
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBNavLink to="/contact"><MDBIcon far icon="envelope" size="2x"/></MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
          }
          {
            this.props.user.role == "candidate" && 
          <MDBNavbar color="indigo" dark expand="md" scrolling fixed="top">
                <MDBNavbarBrand href="/">
                    <strong>Get In Films</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                  <MDBNavbarNav left>
                  <MDBNavItem>
                      <MDBNavLink to="/candidate/profile">Profile</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/candidate/castingcalls">Castingcalls</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/candidate/audition-applied">Applied</MDBNavLink>
                    </MDBNavItem> 
                    <MDBNavItem>
                      <MDBNavLink to="/candidate/plan">Plan</MDBNavLink>
                    </MDBNavItem> 
                    <MDBNavItem>
                      <MDBNavLink onClick={this.handleLogout} to="/logout">Logout</MDBNavLink>
                    </MDBNavItem> 
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBNavLink to="/contact"><MDBIcon far icon="envelope" size="2x"/></MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
          }
          {
            this.props.user.role == "otherCandidate" && 
            <MDBNavbar color="indigo" dark expand="md" scrolling fixed="top">
                <MDBNavbarBrand href="/">
                    <strong>Get In Films</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                  <MDBNavbarNav left>
                  <MDBNavItem>
                      <MDBNavLink to="/othercandidate/profile">Profile</MDBNavLink>           
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/othercandidate/castingcalls">Castingcalls</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/othercandidate/applied">Applied</MDBNavLink>
                    </MDBNavItem> 
                    <MDBNavItem>
                      <MDBNavLink to="/othercandidate/plan">Plan</MDBNavLink>
                    </MDBNavItem> 
                    <MDBNavItem>
                      <MDBNavLink onClick={this.handleLogout} to="/logout">Logout</MDBNavLink>
                    </MDBNavItem> 
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBNavLink to="/contact"><MDBIcon far icon="envelope" size="2x"/></MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
          
          }
          {
            this.props.user.role == "admin" && 
            <MDBNavbar color="indigo" dark expand="md" scrolling fixed="top">
                <MDBNavbarBrand href="/">
                    <strong>Get In Films</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                  <MDBNavbarNav left>
                  <MDBNavItem>
                      <MDBNavLink to="/admin/director">Director</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/admin/candidate">Candidate</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/admin/other-candidate">Other Candidates</MDBNavLink>
                    </MDBNavItem> 
                    <MDBNavItem>
                      <MDBNavLink to="/admin/feedback">Feedbacks</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink onClick={this.handleLogout} to="/logout">Logout</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  
                </MDBCollapse>
              </MDBNavbar>
          }
        </div>) : 
        (<div>
              <MDBNavbar color="indigo" dark expand="md" scrolling fixed="top">
                <MDBNavbarBrand href="/">
                    <strong>Get In Films</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem>
                      <MDBNavLink to="/register">Register</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/">Login</MDBNavLink>
                    </MDBNavItem> 
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBNavLink to="/contact"><MDBIcon far icon="envelope" size="2x"/></MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
        </div>)
      }
    </div>
    <Switch>

          <Route path="/admin" component={AdminPage} exact={true} />
          <Route path="/admin/candidate" component={Candidates} />
          <Route path="/admin/director" component={Directors} />
          <Route path="/admin/other-candidate" component={OtherCandidates} />
          <Route path="/admin/feedback" component={FeedbacksAdmin} />

          <Route path="/" component={Login} exact={true} />
          <Route path="/register" component={RegisterForm} exact={true} />

          

          <Route path="/director" component={DirectorMainPage} exact={true} />
          <Route path="/director/profile" component={ProfilePageDirector} exact={true} />
          <Route path="/director/profile/:id" component={FormProfile} />
          <Route path="/director/movie" component={MoviePage} exact={true} />
          <Route path="/director/movie/:id" component={FormMovieInfo} />
          <Route path="/director/candidates" component={AppliedAuditionPage} />
          <Route path="/director/otherCandidates" component={AppliedAuditionOthers} />
          <Route path="/director/plans" component={DirectorPlanPage} />
      

          <Route path="/candidate" component={CandidateMainPage} exact={true} />
          <Route path="/candidate/profile" component={ProfilePage} exact={true} />
          <Route path="/candidate/profile/:id" component={FormProfileCandidate} />
          <Route path="/candidate/castingcalls" component={NewMovies} exact={true} />
          <Route path="/candidate/castingCalls/:id" component={AuditionMovieInfo} />
          <Route path="/candidate/audition-applied" component={AppliedAuditions} />
          <Route path="/candidate/plan" component={PlansCandidate} />

          <Route path="/otherCandidate" component={OtherCandidateMainPage} exact={true} />
          <Route path="/othercandidate/profile" component={ProfilePageOtherCandidate} exact={true} /> 
          <Route path="/othercandidate/profile/:id" component={FormPageOther} /> 
          <Route path="/othercandidate/castingcalls" component={NewMoviesInfo} exact={true} />
          <Route path="/otherCandidate/castingCalls/:id" component={AuditionFilmInfo} />
          <Route path="/othercandidate/applied" component={AuditionAppliedOther} />
          <Route path="/othercandidate/plan" component={PlanOthersCandidate} />

          <Route path="/contact" component={ContactPage} />

          <Route path="/play" component={PlayGround} />

          

       
         
    </Switch>

    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">Get In Films</h5>
            <p>
            Find and apply to over thousands of casting calls, auditions, and roles on Project Casting, the fastest growing platform for actors, models, and filmmakers. Start and get hired today!
            </p>
          </MDBCol>
          <MDBCol md="4">
          <h5 className="title">Contact Us</h5>
          <p>Address - Bangalore, India</p>
          <p>Email - mohannayak619@gmail.com</p>
          <p>Mobile - +919740283754</p>
          </MDBCol>
          <MDBCol md="1">
            <br />
            <a href="https://www.facebook.com/"><MDBIcon fab icon="facebook-f" size="2x"/></a>
          </MDBCol>
          <MDBCol md="1">
            <br />
            <a href="https://www.twitter.com/"><MDBIcon fab icon="twitter" size="2x"/></a>
          </MDBCol>
          <MDBCol md="1">
            <br />
            <a href="https://www.instagram.com/"><MDBIcon fab icon="instagram" size="2x"/></a>
          </MDBCol>
          <MDBCol md="1">
            <br />
            <a href="https://github.com/mohanKumarNayak"><MDBIcon fab icon="github" size="2x"/></a>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: GET IN FILMS
        </MDBContainer>
      </div>
    </MDBFooter>
    


    </BrowserRouter>
  );
    }
}

const mapStateToProps = (state) => {
  return {
    user : state.user,
    candidate : state.candidate,
    director : state.director,
    otherCandidate : state.otherCandidate,
    newMovies : state.newMovies
  }
}

export default connect(mapStateToProps)(App)





