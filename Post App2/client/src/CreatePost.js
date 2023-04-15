import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from "axios"


const CreatePost = () => {
  const navigate = useNavigate()
  const [post, setPost] = useState({
    title: "",
    description: "",
  })

  const handleChange = (e) => {
    console.log(e.target)
    const {name, value} = e.target

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }



  const handleClick = (e) => {
    // console.log(post)
    e.preventDefault()

    Axios.post("http://localhost:3001/create", post)
    .then ((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log("Error: ", err)
    })
    navigate("posts")
  }



  return (
    <>
        <div className="createPost">
            <h1>Create a Post</h1>

            <form>
              <input type="text" name="title" id="title" placeholder='Title' onChange={handleChange} value={post.title}/>
              <textarea type="text" rows={8} name="description" id="description" placeholder='Description' onChange={handleChange} value={post.description}/>

              <button onClick={handleClick}>Create Post</button>
            </form>

            <button onClick={() => navigate("/")}>Back</button>
        </div>
      
    </>
  )
}

export default CreatePost
