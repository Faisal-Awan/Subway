import React from 'react'
import Inch from './Component/Product/Inch';
import Drinks from './Component/Product/Drinks';
import Chouto from './Component/Product/Chouto';
import FootLong from './Component/Product/FootLong';
import Fountaindrink from './Component/Product/Fountaindrink';
import Platter from './Component/Product/Platter';
import Addon from './Component/Product/Addon';
import Deals from './Component/Product/Deals';
import Combo from './Component/Product/Combo';
import Salad from './Component/Product/Salad';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';



const Routing = () => {
    return (
  
        <Switch>
          <Route exact path="/" component={Inch} />
          <Route exact path="/Chouto" component={Chouto} />
          <Route exact path="/Drinks" component={Drinks} />
          <Route exact path="/FootLong" component={FootLong} />
          <Route exact path="/Fountaindrink" component={Fountaindrink} />
          <Route exact path="/Platter" component={Platter} />
          <Route exact path="/Addon" component={Addon} />
          <Route exact path="/Deals" component={Deals} />
          <Route exact path="/Combo" component={Combo} />
          <Route exact path="/Salad" component={Salad} />

        </Switch>
  
    );
  }

export default Routing;
