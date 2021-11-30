import React from 'react'
import Footer from './components/Footer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const bgimg="https://avatars.githubusercontent.com/u/87180411?v=4";

const About = ()=>{
    return(<>
   <section id="header" className="d-flex align-item-center py-5">
 <div className="container-fluid nav_bg">
       <div className="row">
           <div className="col-10 mx-auto"  >
           <div className="row">
             <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
               <h1><b>ABOUT US</b></h1>
               <h6 className="my-3">I am a Jr mern stack developer who believes in making the internet a better place.</h6>
               <div className="mt-10">
                   <p>Thinkful project base "Build a Landing Page from Scratch" was a sample website built from previous lesson plans.</p>
                   <p>My favorite hobby is building things on the internet like ecommerce sites and email marketing campaigns</p>
                   <a class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Read more..</a><br/>
                    <div className="mt-10" style={{marginTop:"10px"}}>
                    <button class="ui facebook button">
  <i class="facebook icon"></i>
  Facebook
</button>
<button class="ui twitter button">
  <i class="twitter icon"></i>
  Twitter
</button>
<button class="ui google plus button">
  <i class="google plus icon"></i>
  Google Plus
</button>
                    </div>
               </div>
             </div>
             <div className="col-lg-6 order-1 order-lg-2 header-imgae">
                 <img src={bgimg} className="img-fluid " style={{height:'15rem',width:'20rem'}} alt="home img" />
             </div>
            </div>
           </div>
       </div>
   </div>
 </section>
<Footer className="mt-(-10)"/>
    </>)
}
export default About;