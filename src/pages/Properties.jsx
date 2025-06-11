import React from 'react'
import PropertyBanner from '../components/PropertyBanner'
import PropertyList from '../components/PropertyList'
import Form from '../components/Form'
import CallToAction from '../components/CallToAction'


const Properties =()=>{
    return(
        <>
          <PropertyBanner /> 
          <PropertyList />
          <Form />
          <CallToAction/>
 
        </>
    )
}

export default Properties