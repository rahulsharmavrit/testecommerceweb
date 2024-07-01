import React from 'react'

const GetStarted = ({title,description}) => {
   
  return ( <div className="row">
    <div className="col-lg-7 my-5 col-md-10 col-12 text-center mx-auto">
      <p className="font-48-700">{title}</p>
      <p>{description}</p>
      <div className="btn-group">
        <button className="bg-primary text-white p-2 rounded-3 border-0">Get started for free <i className="fa-solid fa-arrow-right"></i></button>
        <button className="border-0 mx-2 bg-transparent font-16-700">Learn more</button>

      </div>
    </div>
  </div> )
}

export default GetStarted