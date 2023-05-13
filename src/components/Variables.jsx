import React from 'react'

const Variables = () => {
    const saludo = "Hello World"
    const image = "https://picsum.photos/200"
    const text_alt = "This is a image" 
  return (
    <div>
        <h1>{saludo}</h1>
        <img src={image} alt={text_alt} />
    </div>
  )
}

export default Variables