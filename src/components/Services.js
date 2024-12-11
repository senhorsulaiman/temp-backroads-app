import React from 'react'
import { services } from '../data'
import { Title } from './Title'
import Service from './Service'

const Services = () => {
  return (
    <section className="section services" id="services">
        <Title title="services"/>

    <div className="section-center services-center">

        {services.map((service)=>{
     

            return(
                <Service key={service.id} {...service}/>
              


            )
        })}
        
  

     
    </div>
    </section>
  )
}

export default Services