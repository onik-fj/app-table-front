import React from "react";
import { useDispatch } from "react-redux";
import { changeStatusAdd } from '../../Redux/todoSlice';
import Header from "../../components/Header/Header";

const HeaderContainer=()=>{
  const dispatch = useDispatch();
    const handleAddRow=()=>{
      dispatch(changeStatusAdd(true));
    }
    return(
        <header>
      <div className={"container"}>
        <Header handleAddRow={handleAddRow}/>
      </div>
    </header>
    )
}
export default HeaderContainer;