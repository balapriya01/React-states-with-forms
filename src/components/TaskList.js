// import { useState } from "react";
import { TaskCard } from "./TaskCard";
// import { InputField } from "./InputField";

const TaskList = ({characters, setCharacters}) => {
  


  function handleDelete(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  return (
    <>
      <div className="container">
      {/* <div className="box-con">
        <InputField characters = {characters} setCharacters = {setCharacters}/>
        </div> */}
        <div className="box-con">
          <ul>
            <h1 style={{ textAlign: "center" }}>Hello Marvel Fans</h1>
            {
              characters.map((character) => (
                <TaskCard
                  key={character.id}
                  character={character}
                  handleDelete={handleDelete}
                  gender = {character.gender}
                />
              ))}
          </ul>
        </div>

        
      </div>
    </>
  );
};

export default TaskList;
