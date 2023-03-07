import React from 'react'
import {Link} from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div>
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">DEVAM</span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div>
                <Link to="/add" ><div class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Add Phone</div></Link>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default AdminNavbar