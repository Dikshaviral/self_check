import React from 'react'
import {Link} from "react-router-dom"
import "./Section_4.css"

const Section_4 = () => {
    return (
        <section className="section4">
        <div className="Section_four">
            <h1>STEP FOUR :</h1>
            <div className="content">
            <p>Feel your breasts while lying down, using your right hand to feel your left breast and then your left hand to feel your right breast.</p>
            <p>Feel for any lumps, thick spots or other changes. </p>
            <p>A circular pattern may help you make sure you hit every spot. <br/>
                Then, press the tissue under the arm. Be sure to check under the areola and then squeeze the nipple gently to check for discharge.
                 <br/><br/>Repeat the steps on the other side of your body.</p>
            <hr/>
            </div>            
            
            <p>If you see any of the above symptoms, consider consulting your doctor</p>
           <div className="end">
               <Link to="/Step_five"><button>Next-></button></Link>             
               </div>
            
        </div>
        </section>
    )
}

export default Section_4
