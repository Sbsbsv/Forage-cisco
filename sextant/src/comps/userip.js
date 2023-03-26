import React, { useEffect, useState } from 'react'

export const Userip = () => {
   const [ip4,setip4]= useState("")
   const [ip64,setip64]= useState("")
    useEffect(()=>{
        func()
        func2()
    },[])
    const func=async()=>{
       
        const response=await fetch("https://api.ipify.org?format=json",{
            method:'get',
            headers:{
                'Content-Type':'application/json',
              
            },
            
        });
      
        let json=await response.json();
        setip4(json.ip)

    }
    const func2=async()=>{
       
        const response=await fetch("https://api64.ipify.org?format=json",{
            method:'get',
            headers:{
                'Content-Type':'application/json',
              
            },
            
        });
      
        let json=await response.json();
        setip64(json.ip)

    }

  return (
   <>
   <div className="conatiner">
<p>public ip is : {ip4} </p>
<p>public ip6 is : {ip64} </p>
   </div>
   </>
  )
}
