import React from 'react'
import '../App.css'

export default function Button({ operation, callback }) {
  return (
    <div>
        <button className='buttonNumber' onClick={() => {
          console.log(`Pressed ${operation}`)
          callback(operation)
          }}>
            {operation}
        </button>
    </div>
  )
}
