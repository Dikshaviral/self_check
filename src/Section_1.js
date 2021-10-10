import React from 'react'
import './Section_1.css'
import { Link } from 'react-router-dom'

const Section_1 = () => {
    return (
        <section className="section1">
        <div className="Section_one">
            <h1>STEP ONE :</h1>
            <div className="content">
            <p>Look at your breasts in the mirror with your shoulders straight and your arms on your hips.</p>
            <p> What You're Looking For -</p>
            <hr/>
            <ul>
                <li>Dimpling, puckering, or bulging of the skin</li>
                <li>A nipple that has changed position or an inverted nipple (pushed inward instead of sticking out)</li>
                <li>Redness, soreness, rash, or swelling</li>
            </ul>
            </div>            
            <p>If you see any of the above symptoms, consider consulting your doctor</p>
           <div className="end">
               <Link to="/Step_two"><button>Next-></button></Link>             
               </div>
            
        </div>
        </section>
    )
}

export default Section_1
