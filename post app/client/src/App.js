import { useState } from 'react';
import './App.css';

function App() {

  const [listofUsers, setListOfUsers] = useState(
    [
      {id: 1, name: "Sayan Maity", age: 20, username: "sayancr777"},
      {id: 2, name: "Sneha Mishra", age: 19, username: "sneha990"},
      {id: 3, name: "Rohan Paul", age: 22, username: "rohan56"}
    ]
  )


  return (
    <div className="App">
      <h1>List of Users</h1>

      <div className="userDisplay">
        {listofUsers.map((user) => {
          return (
            <div className='user-detail'>
              <h4>{user.id}</h4>
              <h4>{user.name}</h4>
              <h4>{user.age}</h4>
              <h4>{user.username}</h4>
            </div>
          )
        })}
      </div>


    
    </div>
  );
}

export default App;
