import React ,{useState, useEffect} from 'react'

function app(){

  const [data, setData]=useState([{}])

  useEffect( () =>{
   fetch("/members").then(
      res => res.json() 
   ).then(
    
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