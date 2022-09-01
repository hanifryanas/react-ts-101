import {useEffect, useState} from 'react'
import axios from 'axios'
import {IEmployee} from '../lib/interfaces'
import Detail from '../pages/Detail'

const EmployeeTable = () => {
       
    const [employees, setEmployees] = useState<IEmployee[]>([])
    // const [loading, setLoading] = useState<boolean>(false)
    
    useEffect(() => {
        axios.get('http://localhost:5090/api/employees')
        .then(res => {
            setEmployees(res.data)
        })
    }, [])

    const handleDetailEmployee = (id: number) => {
        window.location.href = `/detail?id=${id}`
    }

  return (
    employees.length > 0 ?  
    <div className='flex justify-center w-full'>
        <table className='w-full table-auto'>
            <thead>
                <tr>
                    {Object.keys(employees[0]).map(key => (
                        <th key={key} className='bg-slate-200 border-2'>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id} onClick={()=>handleDetailEmployee(employee.id)} className='hover:cursor-pointer'>
                        <td className='border px-4 py-2'>{employee.id}</td>
                        <td className='border px-4 py-2'>{employee.name}</td>
                        <td className='border px-4 py-2'>{employee.address}</td>
                        <td className='border px-4 py-2'>{employee.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    :
    <div>
        No employees found
    </div>
  )
}

export default EmployeeTable