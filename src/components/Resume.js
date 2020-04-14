import React, {Component   } from 'react';
import {Grid, Cell } from 'react-mdl';
import Education from './Education.js'
import Experience from './Experience.js';
import Skills from './Skills.js'
 
class Resume extends Component{

    render(){
        return ( 
            <div> 
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                                src="https://s3-ap-southeast-2.amazonaws.com/portfoliobucket.joseph/myAvatar+(2).png"
                                alt="avatar"
                                style ={{height: '200px'}}
                          />
                            
                        </div>
                        <h2 style={{paddingTop:'2em'}}>
                            Joseph Johney
                        </h2>
                        <h4 style={{color:'grey'}}>Programmer Analyst</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>
                        • Received the Infosys 2019-20 H1 APAC excellence award for contributions to Telstra’s Digitization program
• Led the development team which received Telstra CIO award for best project (SIP Trunking on ASP) for two
times
• Part of the team which received Telstra CTO awards (SIP Trunking - Phase 2)
• Widely appreciated for the drive to provide the best solutions, stakeholder management and defect-free delivery
of critical projects
• Experience in designing multiple application UI upgrade capabilities with Elasticsearch
• AWS and Java certified professional.
• Experience creating custom Java logging frameworks for Splunk/Elastic stack consumption and analysis
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Address</h5>
                        <p>242 Exhibition Str, Melbourne</p>
                        <h5>Phone</h5>
                        <p>(+61) 0439473163</p>
                        <h5>Email</h5>
                        <p>josephjohney16@gmail.com</p>
                        <h5>Web</h5>
                        <p>josephjohney.com</p>
                    </Cell>
                    <Cell className = "resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2005}
                            endYear={2009}
                            schoolName="College of Engineering, Trivandrum, Kerala University"
                            schoolDescription="Bachelor of Technology, Electronics and Communications Engineering"
                        />
                        <Education
                            startYear={2015}
                            endYear={2017}
                            schoolName="Birla Institute of Technology, Pilani, India"
                            schoolDescription="Master of Technology, Computer Systems"
                        />
                        <hr style ={{borderTop: '3px solid #e22947'}}/>
                        <Experience
                            startYear={2011}
                            endYear={2012}
                            jobName="Infosys Technologies"
                            jobDescription="Technology Lead"
                            jobRole=""
                        />
                        <Experience
                            startYear={2011}
                            endYear={2012}
                            jobName="Infosys Technologies"
                            jobDescription="Technology Analyst"
                            jobRole=""
                        />
                        <Experience
                            startYear={2011}
                            endYear={2012}
                            jobName="Infosys Technologies"
                            jobDescription="Senior Systems Engineer"
                            jobRole=""
                            />
                        
                        <Experience
                            startYear={2009}
                            endYear={2011}
                            jobName="Infosys Technologies"
                            jobDescription="Systems Engineer"
                            jobRole=""
                        />
                        
                     <hr style ={{borderTop: '3px solid #e22947'}}/>
                     <h2>
                         Skills
                     </h2>
                    <Skills 
                        skill="javaScript"
                        progress={90}
                    /> 
                    <Skills 
                        skill="NodeJS"
                        progress={60}
                    /> 
                    <Skills 
                        skill="Java"
                        progress={90}
                    /> 
                    <Skills 
                        skill="React"
                        progress={40}
                    /> 
                    <Skills 
                        skill="HTML/CSS"
                        progress={70}
                    /> 
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
