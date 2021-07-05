export const postUser = (valFirstName,valLastName,valCredit) =>
        fetch(`http://localhost:8080/api/user`, {
          method: 'POST', headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: valFirstName,
            surname: valLastName,
            credit: valCredit
          })
        })
          .then((res) => res.json());

export const getUsers = () => 
fetch('http://localhost:8080/api/users', {
  method: 'GET',
})
  .then((res) => res.json());
        