import React from 'react'
//css  modules :- css module vo module hote hai jisme aap kabhi bhi kisi website ka code dekhte ho to wha per aapko class name bhut aadha tedha dikhta hai vo css module ki vajah se hota hai css module ka use krne ke liye ham logg normal ek file banate hai style.module.css naame se aur usme css likh kr use kr skte hai.
function Navbar({data}) {
  return (
    <div className='w-full px-20 py-3 flex justify-between'>
       <h3>Orange</h3>
       <div className='flex p-2 bg-orange-500 rounded-md text-white text-xm gap-3'>
         <h3>Favourites </h3>
         <h4>{data.filter(item => item.added).length}</h4>
       </div>
    </div>
  )
}

export default Navbar
