import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from '../pages/home'
import Devices from '../pages/devices'
import SingleDevice from '../pages/singleDevice'
import NotFound from '../pages/notFound'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component= {Home}/>

          <Route  path ='/devices/:id' component={SingleDevice}/>
          <Route  path='/devices' component={Devices}/>

          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
