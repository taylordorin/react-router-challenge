import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Resume from './components/Resume';
import About from './components/About';
import ProjectsIndexContainer from './containers/ProjectsIndexContainer';
import ProjectShowContainer from './containers/ProjectShowContainer';
import SkillsContainer from './containers/SkillsContainer';
import EducationExperienceContainer from './containers/EducationExperienceContainer';
import WorkExperienceContainer from './containers/WorkExperienceContainer';
import VolunteerExperienceContainer from './containers/VolunteerExperienceContainer';

render((
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={About} />
      <Route path='/resume' component={Resume} />
      <Route path='/resume/skills' component={SkillsContainer} />
      <Route path='/resume/education' component={EducationExperienceContainer} />
      <Route path='/resume/past-work' component={WorkExperienceContainer} />
      <Route path='/resume/volunteer-experience' component={VolunteerExperienceContainer} />
      <Route path='/projects' component={ProjectsIndexContainer} />
      <Route path='/projects/:id' component={ProjectShowContainer} />
    </Route>
  </Router>
),

document.getElementById('app'))
