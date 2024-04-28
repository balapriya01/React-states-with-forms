import { useState } from "react";
import './InputField.css';

export const InputField = ({characters, setCharacters}) => {
  const [addtask, setAddtask] = useState("");
  const [gender, setGender] = useState("Male");



  const handleSubmit = (event) => {
    event.preventDefault();

    const tasks = {
      id: Math.floor(Math.random() * 1000),
      name: addtask,
      gender: gender,
    };
    // console.log(tasks);
    setCharacters([...characters, tasks]);
    setAddtask("");
    setGender("Male");
  };

  return (
    <>
      <section className="inputfield">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setAddtask(e.target.value)}
            type="text"
            name="task"
            id="task"
            placeholder="Your Favorite Character"
            autoComplete="off"
            maxLength={13}
            value={addtask}
            required
          />
          <select className="genselect" onChange={(e) => setGender(e.target.value)} value={gender}>
            <option className="options" value="male">Male</option>
            <option className="options" value="female">Female</option>
          </select>
          <button className="addtask" type="submit">Add Character</button>
        </form>
        {/* <h3 className={addtask.length > 12 ? "redd" : ""}>{addtask}</h3> */}
      </section>
    </>
  );
};

