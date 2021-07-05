import React,{useState} from 'react';
import { useDispatch} from "react-redux";
import Row from '../../components/Row';
import RowEdit from '../../components/RowEdit';
import { removeTodoTask, editTodoTask } from '../../Redux/todoSlice';
import { deleteUser, putUser } from '../RowContainer/asyncActions'

const RowContainer=({todo})=>{
  const dispatch = useDispatch();
  const [vFirstName, setFirstName] = useState('');
  const [vLastName, setLastName] = useState('');
  const [vCredit, setCredit] = useState('');
  const [vId, setId] = useState(0);
  const [statusEdit, setStatusEdit] = useState(false);
  
  const editRow = (vId, vFirstName, vLastName, vCredit) => {
    if (vFirstName.trim() && vLastName.trim() && vCredit.trim()) {
      putUser(vId, vFirstName, vLastName, vCredit).then(dispatch(editTodoTask(vId, vFirstName, vLastName, vCredit)));
    }
  }
  const rowDelete = (todo) => {
    deleteUser(todo.id).then(dispatch(removeTodoTask(todo)));
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
  const handleOnChange=(event)=>{
    if(event.target.name==='name'){ 
      setFirstName(event.target.value);
    }
    if(event.target.name==='surname'){
      setLastName(event.target.value);
    }
    if(event.target.name==='credit'){
      setCredit(event.target.value);
    }
  }
  if(statusEdit){
    return(
      <RowEdit vFirstName={vFirstName} vLastName={vLastName} vCredit={vCredit} 
      handleSave={handleSave} 
      handleCancel={handleCancel}  
      handleOnChange={handleOnChange}/>
    )
  }
  return(
    <Row name={todo.name} surname={todo.surname} credit={todo.credit} 
    handleForm={()=>handleForm(todo)} 
    handleDelete={()=>handleDelete(todo)}/>
  )
}
export default RowContainer;