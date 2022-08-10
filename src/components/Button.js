import React from 'react'

export const Button = ({ caption }) => {
  return (
    <button className={`btn ${caption === 'Upload' ? 'green' : ''}`}>
      {caption}
    </button>
  )
}
