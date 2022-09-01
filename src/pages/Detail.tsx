import {useEffect, useState} from 'react'
import Header from '../components/Header'
import axios from 'axios'
import {IEmployee, IEditEmployee } from '../lib/interfaces'
import { FiEdit, FiTrash } from 'react-icons/fi'

const Detail = () => {
  const [employee, setEmployee] = useState<IEmployee>({
    id: 0,
    name: '',
    address: '',
    phone: ''
  });
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editEmployee, setEditEmployee] = useState<IEditEmployee>({
    name: '',
    address: '',
    phone: ''
    });

  useEffect(() => {
    updateDetail();
  }, []);
  
  const updateDetail = () => {
    const id = new URLSearchParams(window.location.search).get('id');
    axios.get(`http://localhost:5090/api/employees/${id}`)
    .then(res => {
      setEmployee(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    (e.target.id === 'name') &&
    setEditEmployee({
      ...editEmployee,
      name: value
    });
    (e.target.id === 'address') &&
    setEditEmployee({
      ...editEmployee,
      address: value
    });
    (e.target.id === 'phone') &&
    setEditEmployee({
      ...editEmployee,
      phone: value
    });
  }

  const handleUpdate = () => {
    const id = new URLSearchParams(window.location.search).get('id');
    axios.put(`http://localhost:5090/api/employees/${id}`, editEmployee)
    .then(res => {
      console.log(res.data)
      setIsEdit(false)
      window.location.reload();
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleDelete = () => {
    const id = new URLSearchParams(window.location.search).get('id');
    axios.delete(`http://localhost:5090/api/employees/${id}`)
    .then(res => {
      console.log(res.data)
      window.location.href = '/'
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='text-2xl mb-10 font-mono'>
        Detail Employee
      </div>
      <div className='flex flex-row justify-center items-center w-full'>
        <form className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center gap-5'>
              {Object.entries(employee).map(element => (
                <div key={element[0]} className={`${element[0]=='id' ? 'w-1/12' : 'w-1/4'}`}>
                  <label className='text-gray-700 text-sm font-bold'>{element[0]}</label>
                  {isEdit ? 
                  <input id={element[0]} className='w-full border border-gray-300 rounded-lg py-2 px-4' type='text' readOnly={element[0]=='id' ? true : false}
                  onChange={handleChange}/>
                  :
                  <input className='w-full border border-gray-300 rounded-lg py-2 px-4' type='text' value={element[1]} readOnly/>}
                </div>
              ))}
            </div>
          </div>
        </form>
        <div className='flex flex-row gap-2'>
          <button className={`flex justify-center text-white text-lg py-2 px-4 rounded-lg ${isEdit ? 'bg-green-300 hover:bg-green-500':'bg-slate-500 hover:bg-slate-700' }`} onClick={()=>setIsEdit(!isEdit)}>
            <FiEdit/>
          </button>
          <button className='flex justify-center bg-slate-500 hover:bg-slate-700 text-white text-lg py-2 px-4 rounded-lg' onClick={handleDelete}>
            <FiTrash/>
          </button>
        </div>
      </div>
      <div className='w-full flex justify-center my-10'>
        <button className={`flex justify-center bg-slate-500 hover:bg-slate-700 text-white text-lg py-2 px-4 rounded-lg ${isEdit==false && 'hidden'}`} onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  )
}

export default Detail