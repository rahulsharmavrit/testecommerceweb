import React from 'react'

const Banner = ({image}) => {
  return (
<div className="row imageSection">
<div className="col-lg-10 my-5 col-md-12 mx-auto  d-flex justify-content-center imgCol"><img src={image} className="img-fluid" alt="" /></div>
</div>
  )
}

export default Banner