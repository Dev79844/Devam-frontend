import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

const Product = () => {

    const {id} = useParams()
    const[data,setData] = React.useState([])

    React.useEffect(() => {
        const getData = async() => {
            let response = await axios.get(`${import.meta.env.VITE_APP_URI}/admin/phone/${id}`, {
                params:{
                    id: id
                }
            })
            console.log(response.data)
            setData(response.data)
        }
        getData()
    }, [])

  return (
    <div>
        <Navbar />
        <ProductCard name={data.name} model={data.model} warranty={data.warranty} accessories={data.accessories} battery={data.battery} />
    </div>
  )
}

export default Product