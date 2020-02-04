import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCategory from './components/add-category';
import ListCategory from './components/list-category';

function App() {
  return (
    <div className="container">
     
      <div className="row justify-content-center">
       
        <div className="col-sm-12 col-md-4">
          <ListCategory/>
        </div>

        <div className="col-sm-12 col-md-4" style={{padding: "2vh"}}></div>
          <AddCategory />
        </div>

      </div>
  );
}


export default App;
