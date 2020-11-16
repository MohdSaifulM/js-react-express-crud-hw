import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/Home';
import Building from '../src/Building';
import Add from '../src/Add';
import Edit from '../src/Edit';

function App() {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    getBuildings();
  }, [])

  async function getBuildings() {
    try {
      let response = await axios.get("/api/v1/buildings");
      setBuildings(response.data.building);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home buildings={buildings} />
          </Route>
          <Route exact path="/building/:id">
            <Building />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
