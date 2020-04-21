import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//components
import Landing from '../components/main/Landing';
import Learn from '../components/main/Learn';

const Routes = () => {
   return ( 
      <Router>
         <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/learn" component={Learn}/>
            {/* <Route component={NoMatch}} */}
         </Switch>
      </Router>
    );
}
 
export default Routes;