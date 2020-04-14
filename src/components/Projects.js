import React, {Component   } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardActions,Button,CardMenu, IconButtond, CardText, IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);

        this.state ={activeTab : 0};

    }
    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                
                <div className="projects-grid">
                    <Card shadow={5} style = {{minWidth:450 , margin: 'auto'}}>
                        <CardTitle style= {{color: '#fff' , height : '176px', background:'url(https://blog.dashlane.com/wp-content/uploads/2016/02/react-logo-2.png) center / cover'}}>
                            React Project #1
                        </CardTitle>
                        <CardText>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BCE text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical, improper Latin. Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for it

                        </CardText>
                        <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>LiveDemo</Button>
                        <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style ={{color: '#fff'}}>
                            <IconButton name ="share"/>
                        </CardMenu>
                    </Card>

               
                <Card shadow={5} style = {{minWidth:450 , margin: 'auto'}}>
                    <CardTitle style= {{color: '#fff' , height : '176px', background:'url(https://blog.dashlane.com/wp-content/uploads/2016/02/react-logo-2.png) center / cover'}}>
                        React Project #1
                    </CardTitle>
                    <CardText>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BCE text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical, improper Latin. Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for it

                    </CardText>
                    <CardActions>
                    <Button colored>Github</Button>
                    <Button colored>LiveDemo</Button>
                    <Button colored>CodePen</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name ="share"/>
                    </CardMenu>
                </Card>

            
                    <Card shadow={5} style = {{minWidth:450 , margin: 'auto'}}>
                        <CardTitle style= {{color: '#fff' , height : '176px', background:'url(https://blog.dashlane.com/wp-content/uploads/2016/02/react-logo-2.png) center / cover'}}>
                            React Project #1
                        </CardTitle>
                        <CardText>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BCE text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical, improper Latin. Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for it

                        </CardText>
                        <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>LiveDemo</Button>
                        <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style ={{color: '#fff'}}>
                            <IconButton name ="share"/>
                        </CardMenu>
                    </Card>

                </div>
            );
        }
        else if (this.state.activeTab===1){
            return(<div>
            <h1>This is Node</h1>
        </div>);
        }
        else if (this.state.activeTab===2){
            return(
            <div>
            <h1>This is Mongo</h1>
        </div>);
        }
        else if (this.state.activeTab===3){
            return(
            <div>
            <h1>This is Java</h1>
        </div>);
        }
    }
    render(){
        return ( 
            <div className="category-tabs"> 

            <Tabs activeTab={this.state.activeTab}  onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>NodeJs</Tab>
                <Tab>MongoDB</Tab>
                <Tab>React</Tab>
               
                </Tabs>
               
                <section >
                    <Grid >
                        <Cell col={12}>
                            <div classname="content">

                            {this.toggleCategories()}

                            </div>
                        </Cell>
                    </Grid>

                </section>
            </div>
        )
    }
}

export default Projects;
