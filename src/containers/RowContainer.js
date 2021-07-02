import React,{useState} from 'react';
import { useDispatch} from "react-redux";
import Row from '../components/Row';
import RowEdit from '../components/RowEdit';
import { removeTodoTask, editTodoTask } from '../Redux/todoSlice';

const RowContainer=({todo})=>{
  const dispatch = useDispatch();
  const [vFirstName, setFirstName] = useState('');
  const [vLastName, setLastName] = useState('');
  const [vCredit, setCredit] = useState('');
  const [vId, setId] = useState(0);
  const [statusEdit, setStatusEdit] = useState(false);
  
  const editRow = (vId, vFirstName, vLastName, vCredit) => {
    if (vFirstName.trim() && vLastName.trim() && vCredit.trim()) {
      fetch(`http://localhost:8080/api/user/${vId}`, {
        method: 'PUT', headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: vId,
          name: vFirstName,
          surname: vLastName,
          credit: vCredit
        })
      })
        .then((res) => res.json())
      dispatch(editTodoTask(vId, vFirstName, vLastName, vCredit));
    }
  }
  const rowDelete = (todo) => {
    fetch(`http://localhost:8080/api/user/${todo.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
    dispatch(removeTodoTask(todo))
  }
  const handleForm = (todo) => {
    setFirstName(todo.name);
    setLastName(todo.surname);
    setCredit(todo.credit);
    setId(todo.id);
    setStatusEdit(!statusEdit);
  }
  const handleDelete=(todo)=>{
    rowDelete(todo);
  }
  const handleCancel = () => {
    setStatusEdit(!statusEdit);
  }
  const handleSave=()=>{
    editRow(vId, vFirstName, vLastName, vCredit);
    setStatusEdit(!statusEdit);
  }
  const handleOnChangeFN =(event)=>{
    setFirstName(event.target.value);
  }
  const handleOnChangeLN =(event)=>{
    setLastName(event.target.value);
  }
  const handleOnChangeC =(event)=>{
    setCredit(event.target.value);
  }
  if(statusEdit){
    return(
      <RowEdit vFirstName={vFirstName} vLastName={vLastName} vCredit={vCredit} handleSave={handleSave} handleCancel={handleCancel} handleOnChangeFN={handleOnChangeFN} handleOnChangeLN={handleOnChangeLN} handleOnChangeC={handleOnChangeC}/>
    )
  }
  else{
    return(
      <Row name={todo.name} surname={todo.surname} credit={todo.credit} handleForm={()=>handleForm(todo)} handleDelete={()=>handleDelete(todo)}/>
    )
  }
}
export default RowContainer;
