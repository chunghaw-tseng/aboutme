import React from 'react';
import './App.css';
import CustomNavBar from './components/shared/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import AboutMe from './components/about_me/aboutMe';
import Career from './components/career/career';
import Contacts from './components/contacts/contacts';
import './i18n';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/home';
import Skills from './components/skills/skills';
import { MainContainer } from './AppElements';

function App() {
  return (
    <Router>
      <MainContainer>
        <CustomNavBar />
        <Switch>
          <Route exact path='/aboutme' component={Home} />
          <Route path='/home' component={AboutMe} />
          <Route path='/projects' component={Career} />
          <Route path='/skill' component={Skills} />
          <Route path='/contact' component={Contacts} />
        </Switch>
      </MainContainer>
    </Router>
  );
}

export default App;
