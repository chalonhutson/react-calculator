import React from 'react'
import '../App.css'

export default function Button({ callback }) {
  return (
    <div>
        <button className='buttonNumber' onClick={() => {
          console.log(`Pressed equals`)
          callback()
          }}>
            =
        </button>
    </div>
  )
}
