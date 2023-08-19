
import "./App.css";
// import { Button, Input } from "./component/input";
import { Button, Input } from "./component/Input";
import { useState } from "react";



function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  let add = () => {
    if (!text) {
      alert("Text is Required")      
      return;
      
    }
    setList([...list, text]);
    setText([""]);
    // console.log(list)
    
  };

  let del = (i) =>{
    list.splice(i,1)
    setList([...list])
  }

  let edit = (i) => {
    let a = prompt("Enter Text" , list[i])
    list[i] = a;
    setList([...list])
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="inp">
    
        <Input
          lable="Add Task"
          // type="text"
          size="25"
          onChange={(e) => setText(e.target.value)}/>
         
        
        <Button onClick={add} lable="Add Task"/>
      </div>
      <div className="list">
        <ul>
          {list.map((e, i) => {
            return <li key={i}>{e}
            <Button onClick={()=> edit(i)} lable="Edit"/>
            <Button onClick={()=>del(i)} lable="Delete"/>
            </li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;