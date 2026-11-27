
import { useEffect, useState } from "react";

type Priority_type = "Urgent" | "Moyenne" | "Basse";
type Todo_type = {
  id: number;
  text: string;
  priority: Priority_type;
}

function App() {
  const [priority, setPriority] = useState<Priority_type>("Moyenne");
  const [input, setInput] = useState<string>("");
  
  const savedTodos = localStorage.getItem("todos");
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : []; 
  const [todos, setTodos] = useState<Todo_type[]>(initialTodos);


  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);

  function addTodo() {
    if (input.trim() == "") {
      return false;
    }
    const newTodo: Todo_type = {
      id: Date.now(),
      text: input.trim(),
      priority: priority
    }

    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    console.log(todos);




  }
  console.log("Passage");


  return (
    <>




      <div className="flex justify-center" >
        <div className="w-2/3 flex flex-col gap-4 my-15 bg-base-300 p-5 rounded-2xl">
          <div className="flex gap-4">
            <input
              type="text"
              className="input w-full"
              placeholder="Ajouter une Tache"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <select
              className="select w-full"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}

            >
              <option>Urgent</option>
              <option>Moyenne</option>
              <option>Basse</option>
            </select>
            <button
              className="btn btn-primary"
              onClick={addTodo}

            >Ajouter</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
