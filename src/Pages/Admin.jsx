import React from 'react'
import AdminCard from '../components/AdminCard'
import AdminCardList from '../components/AdminCardList'
import AdminNavbar from '../components/AdminNavbar'
import Navbar from '../components/Navbar'

const Admin = () => {
  return (
    <div>
        <AdminNavbar />
        <AdminCardList />
    </div>
  )
}

export default Admin