import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoTask, getTodoTask, changeStatusAdd } from '../../Redux/todoSlice';
import RowContainer from "../RowContainer/RowContainer";
import RowAdd from "../../components/RowAdd/RowAdd";
import { postUser, getUsers } from "./asyncActions";
import './Table.scss';

const TableContainer=()=>{
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state);
  let list = [...todoList.todosTask].reverse();
  useEffect(() => {
    getUsers().then((result) => dispatch(getTodoTask(result)))
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
    postUser(valFirstName,valLastName,valCredit).then((result)=> dispatch(addTodoTask(result.id, valFirstName, valLastName, valCredit)));
    dispatch(changeStatusAdd(false));
    }
    setValueFirstName('');
    setValueLastName('');
    setValueCredit('');
  }
  const handleOnChange=(event)=>{
    if(event.target.name==='name'){
      setValueFirstName(event.target.value)
    }
    if(event.target.name==='surname'){
      setValueLastName(event.target.value)
    }
    if(event.target.name==='credit'){
      setValueCredit(event.target.value)
    }
  }
    return(
        <table className={"container"}>
        <tbody>
        {todoList.statusAdd ? <RowAdd valFirstName={valFirstName} valLastName={valLastName} valCredit={valCredit} 
        handleSubmit={handleSubmit} 
        handleCancel={handleCancel} 
        handleOnChange={handleOnChange}/> : null}
          {list.map((todo) => {
            return (
              <tr key={todo.id}>
                <RowContainer todo={todo}/>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
}

export default TableContainer;