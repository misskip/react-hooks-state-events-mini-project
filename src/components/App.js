import React, {useState} from "react";
import Form from './Form';



function App () {
const [tasks, setTasks] = useState([]);

const taskComplete = (i) => 
  setTasks(tasks.map((task, k) => 
    k === i ? {
      ...task,
      complete: !task.complete
    }
    :task
  )
);

return (
  <div className="App">
    <Form 
    onSubmit={text => setTasks([{text, complete: false}, ...tasks])}
    />
    <div>
      {tasks.map(({text, complete}, i) => (
      <div 
      key={text} 
      onClick={()=>taskComplete(i)}
      style={{
        textDecoration: complete ? 'line-through' : ""
      }}
      >{text}</div>
      ))}
    </div>
    <button onclick={() => setTasks([])}>reset</button>
  </div>

  );
};

export default App;