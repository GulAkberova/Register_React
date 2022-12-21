import React,{useState,useEffect} from 'react'
import './bill.css'

function Bill() {
    
    // ______________________________________
  const[input,setInput]=useState('')
  const[inputt,setInputt]=useState('')
  const [all,setAll]=useState([])
  
    useEffect(() => {
      fetch('https://northwind.vercel.app/api/products')
      .then(res=>res.json())
      .then(data=>setAll(data))
      // console.log('scse',all)
      
    }, [])
    // console.log(all.length)
   
    const handleSubmit=()=>{
        setInputt(input)

    }
   
    // ________________________________________________________



  return (
    <>

{/* ________________________________________________________________ */}
        <input type={'number'} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={()=>handleSubmit()}>Submit</button>
            <ul>
            {
                all.slice(0,inputt).map((i,key)=>{
                    return(
                        <li key={i.id}>{i.name}</li>
                    )
                })
            }
            </ul>
{/* __________________________________________________________ */}
        


    
        
    </>
  )
}

export default Bill