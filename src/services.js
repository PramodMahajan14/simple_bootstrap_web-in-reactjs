import React from 'react'
import Footer from './components/Footer'
import  Card  from '../src/components/Card';
import Sdata from '../src/components/Sdata';
const Services = ()=>{
    console.log(Sdata)
    return(<>
              <div className="my-5">
                  <h1 className="text-center"> Our Services</h1>
              </div>
              <div className="container-fluid mb-5 mt-2">
                  <div className="row">
                      <div className="col-13 mx-auto">
                          <div className="row gy-2 ">
                             {
                                 Sdata.map((val,ind)=>{
                                     return<Card key={ind} mgs = {val.imgsrc} title = {val.title}/>
                                 })
                             }
                              
                          </div>
                      </div>
                  </div>
              </div>
<Footer/>
    </>)
}
export default Services;