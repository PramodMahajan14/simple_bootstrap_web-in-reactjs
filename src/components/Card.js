import React from 'react'

import '../index.css'
const Card = (props)=>{
    return(<>
     <div className="col-md-4 col-10 mx-auto">
      <div class="card mycard" >
            <img src={props.mgs} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
       </div>
       </div>
    </>)
}
 export default Card