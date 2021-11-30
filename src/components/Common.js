import React from 'react'

import '../index.css'

const Common = (props)=>{
    return(<>
  
 <section id="header" className="d-flex align-item-center">
 <div className="container-fluid nav_bg">
       <div className="row">
           <div className="col-10 mx-auto">
           <div className="row">
             <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
               <h1>Grow your Knowledge with <strong className="brand-name">  Mahajan</strong></h1>
               <h2 className="my-3">{props.subtitle}</h2>
               <div className="mt-10">
                   <a  className="btn-get-started">{props.btname}</a>
               </div>
             </div>
             <div className="col-lg-6 order-1 order-lg-2 header-imgae">
                 <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
             </div>
            </div>
           </div>
       </div>
   </div>
 </section>

    </>)
}
export default Common;

// we are team of talented developer making websites