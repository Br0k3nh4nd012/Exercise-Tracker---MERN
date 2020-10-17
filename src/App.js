import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./Components/Navbar";
import ExerciseList from "./Components/ExerciseList";
import EditExercise from "./Components/EditExercise";
import CreateExercise from "./Components/CreateExercise";
import CreateUser from "./Components/CreateUser";
import UsersList from "./Components/UserList.js";


function App() {
  return (
    <Router>
      <div className ="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExerciseList}/>
      <Route path="/users" exact component={UsersList} /> 
      <Route path="/edit/:id" exact component={EditExercise}/>
      <Route path="/create" exact component={CreateExercise}/>
      <Route path="/CreateUser" exact component={CreateUser}/>

      </div>

    </Router>
    
  );
}

export default App;
