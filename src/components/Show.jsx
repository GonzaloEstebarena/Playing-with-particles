import React, { useState } from 'react'
import Particle from './Particle'
import './show.scss'
import Particleb from './Particleb'


const Boton = () => {
  const [showParticle,setParticle]=useState(true);
  
  return (


    <div>
<button className='b-boton' onClick={()=>setParticle(true)}>X


</button>
<button className='b-boton2' onClick={()=>setParticle(false)}>X


</button>
    
<div >
{showParticle?(<Particle className="particle"/>):( <Particleb className="particle"/>)}
   

  
   
</div>
    </div>
  )
}

export default Boton