import React from "react";
import Form from "./Form"
import './App.css';
function App() {
  return (
    <div>
      <AppTitle/>
      <div className="App">
      <Form/>
      </div>
    </div>
  );
}
function AppTitle(){
  return (
    <h1 id="App-title">Simple Todo List App</h1>
  )
}

export default App;
