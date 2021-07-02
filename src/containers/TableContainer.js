import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoTask, getTodoTask, changeStatusAdd } from '../Redux/todoSlice';
import RowContainer from "./RowContainer";
import RowAdd from "../components/RowAdd";

const TableContainer=()=>{
    const dispatch = useDispatch();
  const todoList = useSelector((state) => state);
  let list = [...todoList.todosTask].reverse();
  useEffect(() => {
    fetch('http://localhost:8080/api/users', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => dispatch(getTodoTask(result)))
  }, [])
  
  const [valFirstName, setValueFirstName] = useState('');
  const [valLastName, setValueLastName] = useState('');
  const [valCredit, setValueCredit] = useState('');
  const handleCancel = () => {
    dispatch(changeStatusAdd(false));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (valFirstName.trim() && valLastName.trim() && valCredit.trim()) {
      fetch(`http://localhost:8080/api/user`, {
        method: 'POST', headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: valFirstName,
          surname: valLastName,
          credit: valCredit
        })
      })
        .then((res) => res.json())
        .then((result) => dispatch(addTodoTask(result.id, valFirstName, valLastName, valCredit)))
        .then(dispatch(changeStatusAdd(false)));
          setValueFirstName('');
          setValueLastName('');
          setValueCredit('');
    }
  }
    return(
        <table className={"container"}>
        <tbody>
        {todoList.statusAdd ?  <RowAdd valFirstName={valFirstName} valLastName={valLastName} valCredit={valCredit} 
        handleSubmit={handleSubmit} 
        handleCancel={handleCancel} 
        handleOnChangeFN={event => setValueFirstName(event.target.value)} 
        handleOnChangeLN={event => setValueLastName(event.target.value)} 
        handleOnChangeC={event => setValueCredit(event.target.value)}/> : null}
          {list.map((todo) => {
            return (
              <tr key={todo.id} todo={todo}>
                <RowContainer todo={todo}/>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
}

export default TableContainer;