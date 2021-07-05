export const deleteUser=(id)=> fetch(`http://localhost:8080/api/user/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json());

export const putUser=(vId, vFirstName, vLastName, vCredit)=> 
fetch(`http://localhost:8080/api/user/${vId}`, {
        method: 'PUT', headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: vId,
          name: vFirstName,
          surname: vLastName,
          credit: vCredit
        })
      })
        .then((res) => res.json());