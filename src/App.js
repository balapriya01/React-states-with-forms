import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import { InputField } from "./components/InputField";

const App = () => {

  const [characters, setCharacters] = useState([]);
  
  return (
    <>
    <InputField characters={characters} setCharacters={setCharacters}/>
    <TaskList characters = {characters} setCharacters = {setCharacters}/>
    
    </>
  );
};

export default App;
