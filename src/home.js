import React from 'react'
import success from './imges/success.svg'
import './index.css'
import pic2 from './imges/pic2.svg'
import Common from './components/Common'
import Footer from './components/Footer'
const Home = ()=>{
    return(<>
  
       <Common 
       subtitle="good books
— books recommended
by successful people"
       btname="Get started"
       imgsrc={success}
      />
     
 <Footer/>
      {/* <div className="bg-image pt-50" style={{backgroundImage:`url(${bgsvgs})`,minHeight:'70vh'}}>
       
      </div> */}
    </>)
}
export default Home;