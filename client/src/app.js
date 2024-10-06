import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Timeline from './components/Timeline';
import SpacecraftDatabase from './components/SpacecraftDatabase';
import AstronautProfiles from './components/AstronautProfiles';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Timeline} />
        <Route path="/spacecraft" component={SpacecraftDatabase} />
        <Route path="/astronauts" component={AstronautProfiles} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
