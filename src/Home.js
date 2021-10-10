import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className="body">
            <h1 className="heading">We Can Beat Breast Cancer Today!</h1>
            <div className="buttons">
              <Link to="/Step_one"><button>Do a Self-Check</button></Link>
                
            </div>
            <p className="credit">Information Source: www.breastcancer.org</p>
        </div>
    )
}

export default Home
