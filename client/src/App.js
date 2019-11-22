// src/App.js

import React from "react";
import Navbar from "./Components/Navbar/Index";
import TeacherProfile from "./Components/Profile/TeacherProfile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TallyForm from './Components/TallyForm/Index';
import StudentProfile from './Components/Profile/StudentProfile'
import Search from './Components/Search/Index';
import Category from './Components/Category/Index';
import './App.css';
import Duplicate from "./Components/Navbar/Duplicate";


function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Navbar} />
          <Route path="/run" component={TallyForm} />
          <Route path="/search" component={Search} />
          <Route path="/menu" component={Duplicate} />
          <Route path="/student-profile" component={StudentProfile} />
          <Route path="/profile" component={TeacherProfile} />
          <Route path="/category" component={Category} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
