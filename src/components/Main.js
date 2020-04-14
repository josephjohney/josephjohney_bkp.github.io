import React, {Component   } from 'react';
import { Switch , Route} from 'react-router-dom';
import Landing from './landingPage';
import Contacts from './Contacts';
import Resume from './Resume';
import Projects from './Projects';
import About from './About';

class Main extends Component{

    render(){
        return (

            
    <Switch>
        <Route exact path="/"  component={Landing}/>
        <Route  path="/aboutme"  component={About}/>
        <Route  path="/contacts"  component={Contacts}/>
        <Route  path="/projects"  component={Projects}/>
        <Route  path="/resume"  component={Resume}/>
            
    </Switch>);
    }
}

export default Main;