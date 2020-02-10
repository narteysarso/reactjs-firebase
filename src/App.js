import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCategory from './components/add-category';
import ListCategory from './components/list-category';
import ListNotes from './components/list-notes';
import EditCategory from './components/edit-category';
import EditNote from './components/edit-note';
import AddNote from './components/add-note';

function App() {
  return (
    <div className="container">
      <EditNote />
      <EditCategory />
      <AddCategory />
      <div className="row justify-content-center" style={{paddingTop: "3vh"}}>
       
        <div className="col">
          <ListCategory/>
        </div>
        
        <div className="col">
          <ListNotes />
        </div>

        <div className="col">
          <AddNote />
        </div>

      </div>
    </div>
  );
}


export default App;
