import {FormEvent} from 'react'
import Header from '../components/Header'
import axios from 'axios'

const AddEmployee = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            name: { value: string }
            address: { value: string }
            phone: { value: string }
        }
        const name = target.name.value;
        const address = target.address.value;
        const phone = target.phone.value;
        const employee = {name, address, phone}
        console.log(employee);
        axios.post('http://localhost:5090/api/employees', employee)
        .then(res => {
            console.log(res)
            window.location.href = '/'
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <div className='w-full h-fit'>
        <div><Header/></div>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='w-1/2 h-full flex-col justify-center items-center'>
                <div className='text-3xl font-mono pt-3 mb-5'>
                    Add New Employee
                </div>
                <form className='flex flex-col w-full justify-center items-end' onSubmit={handleSubmit}>
                    <div className='flex flex-wrap -mx-3 mb-6 justify-center'>
                        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                            <label className='block tracking-wide text-gray-700 text-xs font-bold mb-2'>
                                Name
                            </label>
                            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='name' type='text' placeholder='Jane'/>
                        </div>
                        <div className='w-full md:w-1/3 px-3'>
                            <label className='block tracking-wide text-gray-700 text-xs font-bold mb-2'>
                                Address
                            </label>
                            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='address' type='text' placeholder='Doe'/>
                        </div>
                        <div className='w-full md:w-1/3 px-3'>
                            <label className='block tracking-wide text-gray-700 text-xs font-bold mb-2' >
                                Phone
                            </label>
                            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='phone' type='text' placeholder='555-666-789'/>
                        </div>
                    </div>
                    <button className='w-1/4 h-12 bg-slate-500 hover:bg-slate-700 text-white rounded-lg'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee