import React from 'react'
import '../App.css'

export default function Button({ number }) {
  return (
    <div>
        <button className='buttonNumber' onClick={() => console.log(`Pressed ${number.toString()}`)}>
            {number.toString()}
        </button>
    </div>
  )
}
