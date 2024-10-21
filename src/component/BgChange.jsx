import React, { useState } from 'react'
import './Backgroundchange.css'
function BgChange() {
const[mycolor,setColor]=useState(true);

 const mybtn=()=>{
  setColor(!mycolor)
 }
 
const mydiv={
  background:mycolor?'black':'cyan'
}

const myBtn={
  background:mycolor?'cyan':'black',
  color:mycolor?'black':'white'
}
  return (
    <div style={mydiv}>
      
    
<button style={myBtn} onClick={mybtn}>
  change color
</button>


    </div>
  )
}

export default BgChange
