import React from 'react'
import Card from './Card'

function Cards({users}) {
  return (
    <div className='w-full max-h-96 overflow-auto p-4 flex justify-center gap-4'>
      {users.map((item,index)=>{
       return <Card key={index} user={item} />
      })}  
    </div>
  )
}

export default Cards
