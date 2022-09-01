import React from 'react'

const Header = () => {
  return (
    <div className='text-5xl font-mono pt-3 mb-5 hover:cursor-pointer' onClick={()=>window.location.href='/'}>
        Employee 101
    </div>
  )
}

export default Header