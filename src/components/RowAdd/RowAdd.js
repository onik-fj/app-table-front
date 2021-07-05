import React from "react";
import './RowAdd.scss'
const RowAdd =({valFirstName, valLastName, valCredit, handleSubmit, handleCancel, handleOnChange })=>{
    return(
        <tr>
            <td>
              <form onSubmit={handleSubmit} className={"RowAdd"}>
                  <button type="submit">SAVE</button>
                  <button onClick={handleCancel} className={"btn-form-cancel"}>CANCEL</button>
                  <input value={valFirstName} name='name' onChange={handleOnChange} className={"add-input"}/>
                  <input value={valLastName} name='surname' onChange={handleOnChange} className={"add-input"}/>
                  <input value={valCredit} name='credit' onChange={handleOnChange} className={"add-input"}/>
              </form>
            </td>
          </tr>
    )
}
export default RowAdd;