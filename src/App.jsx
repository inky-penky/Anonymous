import React from "react";
import { Switch, Route } from 'react-router-dom'
import AnonMessenger from "./pages/Anon";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import "./styles.scss";

const apiURL = 'https://ut23t.sse.codesandbox.io/api'

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={SignupPage} />
        <Route path="/message/:anon" component={AnonMessenger} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}