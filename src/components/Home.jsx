import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import { Button } from 'react-bootstrap'
import { CiLogin } from "react-icons/ci";

function Home() {

    const { logOut, user } = useUserAuth();

    console.log(user);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch(err) {
            console.log(err.message);
        }
    }

  return (
    <div className='text-center p-5'>
        <h2 className='pb-2 text-2xl text-indigo-700'>Home</h2>
        <p><span className='text-indigo-600'>Email : </span>{user?.email}</p>
        <p><span className='text-indigo-600'>UID :</span> {user?.uid}</p>
        <div className='flex justify-center items-center pt-3'>
        <Button onClick={handleLogout} className='flex text-sky-700'><span className='pt-1.5 pr-2'><CiLogin /></span> Logout</Button>
        </div>
    </div>
  )
}

export default Home