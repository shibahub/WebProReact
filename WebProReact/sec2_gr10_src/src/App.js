import React, { Component } from'react';


import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from"./components/home";
import NavBar from"./components/navbar";
import SEARCH from"./components/search";
import ABOUT from"./components/aboutus";
import LOGIN from"./components/login";
import ADMIN from"./components/admin";
import UMAN from"./components/usermanage";
import PMAN from"./components/productmanage";
import DETAIL from"./components/product";
class App extends Component{
  render()
  { 
    return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/search" component={SEARCH}/>
      <Route path="/login" component={LOGIN}/>
      <Route path="/aboutus" component={ABOUT}/>
      </Switch>
      </div>
      <Route path="/admin" component={ADMIN}/>
      <Route path="/usermanage" component={UMAN}/>
      <Route path="/productmanage" component={PMAN}/>
      <Route path="/product" component={DETAIL}/>
      </BrowserRouter >
      ); 
    } 
  } 
  export default App;
  