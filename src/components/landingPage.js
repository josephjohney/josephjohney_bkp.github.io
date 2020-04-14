import React, {Component   } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{

    render(){
        return ( 
            <div style ={{width: '100% ', margin: "auto"}}> 
            <Grid className="landing-grid">
                <Cell col={12}>
                    
                    <img
                        src="https://s3-ap-southeast-2.amazonaws.com/portfoliobucket.joseph/myAvatar.png"
                        alt ="avatar"
                        className="avatar-image"
                     />
                     <div className="banner-text">
                         <h1>Full Stack Developer </h1>
                        <hr/>

                        <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS |  ReaactJS </p>
                        <div className="social-links">
                            {/* Linked In*/}
                            <a href ="http://google.com"  rel ="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"aria-hidden="true"/>
                            </a>

                            {/* GIT hub  In*/}
                            <a href ="http://google.com"  rel ="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"aria-hidden="true"/>
                            </a>

                            {/* Free Code camp*/}
                            <a href ="http://google.com"  rel ="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp"aria-hidden="true"/>
                            </a>

                            {/* Youtube*/}
                            <a href ="http://google.com"  rel ="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square"aria-hidden="true"/>
                            </a>
                        </div>
                     </div>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Landing;
