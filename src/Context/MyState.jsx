import React ,{ useContext, useEffect, useState } from 'react'
import { myContext } from './myContext';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../FireBase/Firebase';
import { v4 } from 'uuid';


const MyState = (props) => {
  const name = "sohidul islam anonto"
  // This is for set image
  const [imageFile,setImageFile] = useState();
  //this is for set image list
  const [ allImageS ,setImageLIst] = useState([]);
  // this is the path of storage
  const imagesRef = ref(storage , 'productImages/');
  // this is for save file's
  const fileSave =()=>{

      const storageRef = ref(storage,`productImages/${imageFile.name + v4()}`)

      uploadBytes(storageRef,imageFile)
        .then((snapShort)=>{
        // getDownloadURL(snapShort.ref).then((url)=>{
        //     setImageLIst((provider)=>[...provider, url])
        // })
        alert("Uploading image successfully")
      })
  }

  // this is for get images
  useEffect(()=>{
    listAll(imagesRef).then((res)=>{
      res.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setImageLIst((prev)=>[...prev,url])
        })
      })
    })
  },[])

  return (
    <myContext.Provider value={{ fileSave , setImageFile ,name }}>
        {props.children}
    </myContext.Provider>
  )
}

export default MyState