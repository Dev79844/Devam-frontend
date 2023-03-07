import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminCard = ({id, name, model, accessories, warranty, battery}) => {

    const navigate = useNavigate()

    // console.log(id,name)

    const handleClick = () => {
        navigate(`/product/${id}`)
    }

  return (
    <div className='p-8'>
        <div className="max-w-sm w-full lg:max-w-full lg:flex" onClick = {handleClick}>
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
            </div>
            <img src='images/dev.jpg' className='object-fill h-auto max-w-xs' />
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">Model: {model}</p>
                <p className="text-gray-700 text-base">Accessories: {accessories}</p>
                <p className="text-gray-700 text-base">Warranty: {warranty}</p>
                <p className="text-gray-700 text-base">Battery: {battery}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminCard