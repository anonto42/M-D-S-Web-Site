import React, { useContext } from 'react'
import MyState from '../../Context/myState';
import { myContext } from '../../Context/myContext';


// This is card is for admin's

const UploadCard = () => {
    const { name , fileSave , setImageFile } = useContext(myContext);

  return (
    <div className=' absolute left-0 right-0'>
        <div className='w-5 h-5'></div>
    </div>
  )
}

export default UploadCard