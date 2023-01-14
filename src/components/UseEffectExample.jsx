// useEffect Hook 'u react  component yaşam döngüsünde kaldırma, güncelleme ve çekme gibi durumlarda kullanılır.
import React from 'react' 
import { useState, useEffect } from 'react'
import ListUser from "./ListUser"


const UseEffectExample = () => {
    const [ user, setUser] = useState([]) // gelen veri array içinde olduğu için başlangıçı array veriyoruz.

    //Api den veri çekme fonksiyonumu tanımlıyorum
    // Bildiğiniz gibi bu fonksiyonun çalışması için çağrılması gerekir.
    // Ancak bunu aşağıda çağırırsak sayfa sonsuz döngüye gider.
     const url = "https://api.github.com/users";
    const getUser = ()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=> setUser(data))
        .catch((err)=> console.log(err))

    }

   getUser()


  return (
    <div>
        <ListUser user={user}/>
    </div>
  )
}

export default UseEffectExample