import "./App.css";
// import { Button, Input } from "./component/input";
import { Button, Input } from "./component/Input";
import { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { BiSolidMessageEdit } from "react-icons/bi";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const add = () => {
    if (!text) {
      alert("Text is Required");
      return;
    }
    setList([...list, text]);
    setText([""]);
    setText("");
    // console.log(list)
  };

  const del = (i) => {
    list.splice(i, 1);
    setList([...list]);
  };

  const edit = (i) => {
    const a = prompt("Enter Text", list[i]);
    list[i] = a;
    setList([...list]);
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="header">
          <h1 className="">Todo App</h1>
        </div>
        <div className="inp">
          <Input
            lable="Add Task"
            // type="text"
            size="25"
            keypress={(e)=>{
              // console.log("Code",e.charCode              )
            if(e.charCode === 13){
              add()
            }
            }}
            className="task-input"
            onChange={(e) => setText(e.target.value)}
          />

          <Button
            onClick={add}
            lable="Add"
            className="button-add"
            type="submit Button"
          />
        </div>

        <div className="list">
          {list.map((e, i) => {
            return (
              <li key={i} className="list-item">
                <duv>{e}</duv>
                <div>
                  <button
                    onClick={() => edit(i)}
                    className="button-edit task-button"
                  >
                    <BiSolidMessageEdit />
                  </button>
                  <button
                    onClick={() => del(i)}
                    className="button-delete task-button"
                  >
                    <FiDelete />
                  </button>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
