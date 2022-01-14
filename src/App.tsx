import React from 'react';
import TodoList from './Components/TodoList/TodoList';
import TodoDetail from './Components/TodoDetail/TodoDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <h1>My Todo App</h1>
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/details/:id" component={TodoDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
