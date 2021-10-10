import React from 'react'
import {Link} from "react-router-dom"
import "./Section_5.css"

const Section_5 = () => {
    return (
        <div>
        <section className="section5">
        <div className="Section_five">
            <h1>STEP FIVE</h1>
            <div className="content">
            <p> Lie down and put a pillow under your right shoulder. Place your right arm behind your head. <br/>Using your left hand, apply the same technique as step 2, <br/>using the pads of your fingers to press all parts of the breast tissueand under your arm.</p>
            <p>Feel for any lumps, thick spots or other changes. </p>
            <p>Be sure to check under the areola and then squeeze the nipple gently to check for discharge.
                 <br/><br/>Repeat the steps on the other side of your body.</p>
                 <hr/>
            </div>            
            
            <p>If you see any of the above symptoms, consider consulting your doctor</p>

               <Link to="/"><button>You're Done!</button></Link>             
            
        </div>
        </section>
        </div>
    )
}

export default Section_5
