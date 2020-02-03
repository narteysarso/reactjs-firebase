import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddNote from './components/add-note';
import ListNotes from './components/list-notes';

function App() {
  return (
    <div className="container">
     
      <div className="row justify-content-center">
       
        <div className="col-sm-12 col-md-4">
          <ListNotes />
        </div>

        <div className="col-sm-12 col-md-4" style={{padding: "2vh"}}></div>
          <AddNote />
        </div>

      </div>
  );
}


export default App;
