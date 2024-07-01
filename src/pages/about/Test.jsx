import React from 'react'

const Test = ({name,email,address}) => {

  return (<>
            <ul>
                <li> Name : {name} </li>
                <li> Email : {email}  </li>
                <li> Address : {address} </li>
            </ul>
  </>)
}

export default Test