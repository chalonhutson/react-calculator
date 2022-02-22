import React from 'react'

export default function Button({ number }) {
  return (
    <div>
        <button onClick={() => console.log(`Pressed ${number.toString()}`)}>
            {number.toString()}
        </button>
    </div>
  )
}
