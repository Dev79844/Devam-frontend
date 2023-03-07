import React from 'react'
import AdminCard from './AdminCard'
import axios from 'axios'

const AdminCardList = () => {

    const [data, setData] = React.useState([])

    React.useEffect(() => {
        const getData = async() => {
            const response = await axios.get(`${import.meta.env.VITE_APP_URI}/admin/phone`)
            // console.log(response)
            setData(response.data)
        }
        getData()
    }, [])


        const display = data.map(entry => {
            console.log(entry._id)
            return <AdminCard id={entry._id} name={entry.name} model={entry.model} accessories={entry.accessories} battery={entry.battery} warranty={entry.warranty} />
        })

  return (
    <div>
        <div className='grid justify-center items-center grid-cols-3'>
            {display}
        </div>
    </div>
  )
}

export default AdminCardList