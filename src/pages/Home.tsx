import React from 'react'
import Header from '../components/Header'
import EmployeeTable from '../components/EmployeeTable'

const Home = () => {
  const handleAddEmployee = () => {
    window.location.href = '/add'
  }
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='w-1/2'>
        <Header/>
      </div>
      <div className='flex w-1/2 my-2 justify-end'>
          <button className='w-1/5 bg-slate-500 hover:bg-slate-700 text-white text-xs py-2 px-4 rounded-lg' onClick={handleAddEmployee}> 
            Add Employee
          </button>
      </div>
      <div className='flex w-1/2 justify-center'>
        <EmployeeTable/>
      </div>
    </div>
  )
}

export default Home
