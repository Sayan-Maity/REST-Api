import React from 'react'
import { useNavigate } from "react-router-dom"

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div>
        <div className="landing">
            <h1>Landing Page</h1>

            <button onClick={() => navigate("create")}>Create Post</button>

        </div>
      
    </div>
  )
}

export default LandingPage
