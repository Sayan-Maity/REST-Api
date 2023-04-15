import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

// const baseURL = "http://localhost:3001/api"

const App = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Axios.get(`${process.env.baseURL}/getUsers`)
    try {
      Axios.get('http://localhost:3001/api/getUsers').then((res) => {
        console.log(res.data);
        setListOfUsers(res.data);
      });
    }
    catch (err) {
      console.log("Error: ", err)
    }
  }, []);

  async function createUser() {
    try {
      Axios.post("http://localhost:3001/api/postUsers", {
        name,
        age,
        username,
      }).then((res) => {
        setListOfUsers([
          ...listOfUsers,
          {
            name,
            age,
            username,
          },
        ]);
        setName('');
        setAge('');
        setUsername('');
      });
    }
    catch (err) {
      console.log("Error: ", err)

    }
  };

  return (
    <div className="App">
      <h1>POST User list</h1>
      <div className="post-user">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button onClick={createUser}>Create User</button>
      </div>

      <h1>GET User list</h1>
      <div className="userDisplay">
        {listOfUsers.map((user) => {
          return (
            <div className="user-detail">
              <h4>{user.id}</h4>
              <h4>{user.name}</h4>
              <h4>{user.age}</h4>
              <h4>{user.username}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

