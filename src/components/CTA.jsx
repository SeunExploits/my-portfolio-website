import React from 'react'
import CV from '.././assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Check out my CV</a>
        <a href='#contact' className='btn btn-primary'>Hit me up!</a>
    </div>
  )
}

export default CTA