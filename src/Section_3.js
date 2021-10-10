import React from 'react'
import { Link } from 'react-router-dom'
import "./Section_3.css"

const Section_3 = () => {
    return (
        <section className="section3">
            <div className="Section_three">
           <h1>STEP THREE</h1>
           <p>Look for any signs of fluid coming out of one or both nipples - this could be a watery, milky, or yellow fluid or blood.</p>
           <Link to="/Step_four"><button>Next -></button></Link>
        </div>
        </section>
    )
}

export default Section_3
