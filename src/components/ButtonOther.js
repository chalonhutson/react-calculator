import React from 'react'
import '../App.css'

export default function Button({ symbol, callback }) {
  return (
    <div>
        <button className='buttonNumber' onClick={() => {
          console.log(`Pressed button`)
          callback()
          }}>
            {symbol}
        </button>
    </div>
  )
}
