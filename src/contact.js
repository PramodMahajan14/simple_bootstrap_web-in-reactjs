import React from 'react'
import Footer from './components/Footer'


const Contact = ()=>{
    return(<>
       <div className="my-5 ">
         <h1 className="text-center"> Contact us</h1>
       </div>
       <div className="container contact_div">
         <div className="row">
           <div className="col-md-6 col-10 mx-auto">
             <form>
                 <div class="mb-3">
                   <label for="exampleFormControlInput1" class="form-label">Name</label>
                   <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
                 </div>
                 <div class="mb-3">
                   <label for="exampleFormControlInput1" class="form-label">Phone</label>
                   <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Phone number"/>
                 </div>
                 <div class="mb-3">
                   <label for="exampleFormControlInput1" class="form-label">Email address</label>
                   <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email"/>
                 </div>
                 <div class="mb-3">
                   <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                 </div>
                 <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
             </form>
           </div>
         </div>
       </div>
<Footer/>
    </>)
}
export default Contact;