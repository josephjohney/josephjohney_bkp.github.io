import React from 'react';
import './App.css';
import {   Header, Layout, Navigation, Drawer,Content} from 'react-mdl';
import { BrowserRouter, Link} from 'react-router-dom';
import Main  from "./components/Main.js";

function App() {
  return (
    <BrowserRouter>
<div className="layout">
    <Layout >
        <Header title={<Link style={{textDecoration:'none', color:'white' }} to="/">Joseph Johney</Link>} className="header-color" scroll>
            <Navigation> 
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="Projects">Projects</Link>

                <Link to="/contacts">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black' }} to="/">Joseph Johney</Link>} className="header-color" scroll >
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="Projects">Projects</Link>

                <Link to="/contacts">Contact</Link>
            </Navigation>
        </Drawer>
        <Content >
          <div >
            <Main/>
          </div>
        </Content>
    </Layout>
</div>
</BrowserRouter>
  );
}

export default App;
