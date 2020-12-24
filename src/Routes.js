import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
import ChatList from "./containers/ChatList/ChatList";

export default function Routes() {
  return (
    <Router>
      <div>
        <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/calls">
            <div>
              calls
            </div>
          </Route>
          <Route path="/status">
            <div>
              status
            </div>
          </Route>
          <Route path="/">
            <ChatList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
