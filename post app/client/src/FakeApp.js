import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

// const baseURL = "http://localhost:3001/api"

const FakeApp = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Axios.get(`${process.env.baseURL}/getUsers`)
    Axios.get('http://localhost:3001/api/getUsers').then((res) => {
      console.log(res.data);
      setListOfUsers(res.data);
    });
  }, []);

  const createUser = () => {
    Axios.post('http://localhost:3001/api/postUsers', {
      name,
      age,
      username,
    }).then((res) => {
      setListOfUsers(...listOfUsers, { name, age, username });
      alert('USER CREATED');
    });
  };

  return (
    <div className="App">
      <h1>POST User list</h1>
      <div className="post-user">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username"
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

export default FakeApp;
