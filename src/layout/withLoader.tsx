import React, { useState } from 'react'

const withLoader = (wrappedComponent:any) => {
  return(props) => {
    const [loading, setloading] = useState(true);

    return <></>

  }
}

export default withLoader