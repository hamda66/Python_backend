import React ,{useState, useEffect} from 'react'

function app(){

  const [data, setData]=useState([{}])

  useEffect( () =>{
   fetch("/members").then(
      res => res.json() 
   ).then(
      data =>{
        
      }

   )
  }
   ,[]
  )
  return {
        <div>

        </div>
  }
}

export default App