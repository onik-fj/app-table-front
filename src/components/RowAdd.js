const RowAdd =({valFirstName, valLastName, valCredit, handleSubmit, handleCancel, handleOnChange })=>{
    return(
        <tr>
            <td>
              <form onSubmit={handleSubmit}>
                <div>
                  <button type="submit">SAVE</button>
                  <button onClick={handleCancel}>CANCEL</button>
                  <input value={valFirstName} name='name' onChange={handleOnChange} />
                  <input value={valLastName} name='surname' onChange={handleOnChange} />
                  <input value={valCredit} name='credit' onChange={handleOnChange} />
                </div>
              </form>
            </td>
          </tr>
    )
}
export default RowAdd;