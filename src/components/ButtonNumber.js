import React from 'react'
import '../App.css'

export default function Button({ number, callback }) {
  return (
    <div>
        <button className='buttonNumber' onClick={() => {
          console.log(`Pressed ${number.toString()}`)
          callback(number)
          }}>
            {number.toString()}
        </button>
    </div>
  )
}
