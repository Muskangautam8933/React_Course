import React from 'react'

function Card({ image, artist, added, name, handleClick , index}) {
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative mt-10'>
      <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div>
        <h3 className='text-xl leading-none font-semibold'>{name}</h3>
        <h3 className='text-sm'>{artist}</h3>
      </div>
      <button onClick={() => handleClick(index)} className={`px-4 py-3 whitespace-nowrap ${added === false ? "bg-orange-600":"bg-teal-500"} absolute bottom-0 text-white left-1/2 -translate-x-[50%] translate-y-[50%] text-xs rounded-full `}>
        {added === false ? " Add to Favourites" : "Added"}
      </button>
    </div>
  )
}

export default Card
