import React from 'react'

const ProductCard = ({model, name, warranty, accessories, battery}) => {
  return (
    <div className='flex justify-center items-center pt-10 flex-col gap-3 text-3xl'>
        <p className='font-bold'>{name}</p>
        <p>Model: {model}</p>
        <p>Warranty: {warranty}</p>
        <p>Accessories: {accessories}</p>
        <p>Battery Condition: {battery}</p>
    </div>
  )
}

export default ProductCard