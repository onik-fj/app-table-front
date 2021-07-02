import React from 'react';

const RowEdit=({handleSave, handleCancel, vFirstName, vLastName, vCredit, handleOnChange})=>{
    return(
        <>
        <td className={""}>
          <button onClick={handleSave}>SAVE</button>
          <button onClick={handleCancel}>CANCEL</button> 
        </td>
        <td><input value={vFirstName} name='name' onChange={handleOnChange} /></td>
        <td><input value={vLastName} name='surname' onChange={handleOnChange} /></td>
        <td><input value={vCredit} name='credit' onChange={handleOnChange} /> </td>
        </>
      ) 
}
export default RowEdit;