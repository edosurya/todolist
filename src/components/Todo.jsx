import { useState } from "react"

export default function Todo() {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event)=> {
        setTodo(event.target.value);
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        console.log(todoList);
        setTodo("");
    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} ></input>
                <button type="submit">Add</button>
            </form>
            <ul>
                { todoList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>          
        </div>
    )
    
}