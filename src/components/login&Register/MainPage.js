import React from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import director1 from '../../images/director1.jpg'
import hero from '../../images/hero.png.jpg'
import dance from '../../images/dance.jpg'

function MainPage(){
    return(
        <div>
            <div className="row" align="center">
                <div className="col-md-12" style={{backgroundImage :`url(${director1})`,backgroundSize : "cover",height:"220px"}}>
                    <h4 className="display-3" style={{fontSize:"70px",color:'white'}}>Director Login</h4><br />
                    <Link to="/login"><button className="btn btn-primary" style={{width : "25%"}}>Login</button></Link><br /><br />
                </div>
                <div className="col-md-12" style={{backgroundImage:`url(${hero})`,backgroundSize : "cover",height:"220px"}}>
                    <h4 className="display-3" style={{fontSize:"70px",color:'white'}}>Candidate Login</h4><br />
                    <Link to="/login"><button className="btn btn-primary" style={{width : "25%"}}>Login</button></Link><br /><br />
                </div>
                <div className="col-md-12" style={{backgroundImage :`url(${dance})`,backgroundSize : "cover",height:"250px"}}>
                    <h4 className="display-3" style={{fontSize:"70px",width:"100%",color:'white'}}>OtherCandidate Login</h4><br />
                    <Link to="/login"><button className="btn btn-primary" style={{width : "25%"}}>Login</button></Link><br /><br />
                </div>
                

            </div>
        </div>
    )
}

export default connect()(MainPage)
