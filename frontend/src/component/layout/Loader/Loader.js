import React from 'react'
import './Loader.css'
import MoonLoader from 'react-spinners/MoonLoader'
const Loader = () => {
    const color = '#305F56'
    const size = window.innerWidth < 600 ? 35 : 40
  return (
      <div className="loader_div">

          <MoonLoader className="loader" color={color} size={size} />
      </div>
  )
}

export default Loader;
