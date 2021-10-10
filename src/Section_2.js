import React from 'react'
import { Link } from 'react-router-dom'
import "./Section_2.css"

const Section_2 = () => {
    return (
        <section className="section2">
        <div className="Section_two">
           <h1>STEP TWO</h1>
           <p>Repeat step one with your arms raised and look for the same changes.</p>
           <Link to="/Step_three"><button>Next -></button></Link>
        </div>
        </section>
    )
}

export default Section_2
