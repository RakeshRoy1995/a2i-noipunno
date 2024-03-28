import React from 'react'
import { Card } from 'react-bootstrap'
import { SlBookOpen } from 'react-icons/sl'

const AnnualSummativeAssessment = () => {
  return (
    <Card className='  mx-auto rounded-5 shadow  mb-5 bg-body rounded mt-5'  style={{ width: '25rem', height: "13rem" }}>
    <div className='d-flex flex-column justify-content-center align-items-center mt-5 h-100 '>
      <div className='d-flex justify-content-center align-items-center' >
        <SlBookOpen style={{fontSize:"28"}}/>
      </div>
      <Card.Body className='text-center' style={{fontSize:"28px", fontWeight:"bolder"}}>
      বার্ষিক সামষ্টিক মূল্যায়ন
      </Card.Body>
    </div>
  </Card>
  )
}

export default AnnualSummativeAssessment