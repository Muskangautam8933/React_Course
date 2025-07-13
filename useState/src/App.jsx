//creating something using useState
import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function App() {
  const [val,setVal] = useState(false)
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className='relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden'>
        <img className ={`shrink-0 transition-transform ${val === false ? "-translate-x-[0%]": "-translate-x-[100%]"} h-full w-full object-cover`} src="https://plus.unsplash.com/premium_photo-1747852228953-48b53593fa80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className ={`shrink-0 transition-transform ${val === false ? "-translate-x-[0%]": "-translate-x-[100%]"} h-full w-full object-cover`} src="https://images.unsplash.com/photo-1744649781353-8a1b70c37a77?q=80&w=1217&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <span onClick={()=>setVal(()=>!val)} className=' w-8 h-8 flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <FaArrowRightLong  size = {".8em"}/>
        </span>
      </div>
      
    </div>
  )
}

export default App


























// import React, { useState } from 'react'

// function App() {
//  const [val, setVal] = useState(false);
//   return (
//     <div>
//        <h1>
//         {val === false ? "bahar jao": "mat jao"}
//        </h1>
//        <button onClick={()=>setVal(()=>!val)} className='px-4 py-2 mt-3 bg-amber-300 text-xl rounded-full text-red-500'>change</button>
//     </div>
//   )
// }

// export default App










// //Addition in array using useState
// import React, { useState } from 'react'

// function App() {
//  const [val,setVal] = useState([
//   {name:"muskan",age:20},
//   {name:"dev",age:21},
//   {name:"shreya",age:22}])
//   return (
//     <div className='p-5'>
//       {val.map((item) =>(
//         <div>
//           <h1>{item.name}</h1>
//           <h1>{item.age}</h1>
//         </div>
//       ))}
//       <button onClick = {()=>setVal(()=>val.map(item => item.name === "dev" ? ({name:"dev", age:24}): item))} className='px-4 py-2 mt-3 bg-amber-300 text-xl rounded-full text-red-500'>Add More Numbers</button>
//     </div>
//   )
// }

// export default App










//removal in array using useState
// import React, { useState } from 'react'

// function App() {
//  const [val,setVal] = useState([1,2,3,4,5,6,7])
//   return (
//     <div className='p-5'>
//        {val.map(item =><h1>{item}</h1>)}
//        <button onClick={()=>setVal(()=>val.filter(item => item%2 !== 0))}  className='px-4 py-2 mt-3 bg-amber-300 text-xl rounded-full text-red-500'>change</button>
      
//     </div>
//   )
// }

// export default App





//except index 2
// import React, { useState } from 'react'

// function App() {
//   const [val,setVal] =useState([1,2,3,4,5,6,7,8,9])
//   return (
//     <div className='p-5'>
//        {val.map(item=> <h1>{item}</h1>)}
//        <button onClick={()=>setVal(()=>val.filter((item,index) => index != 2))} className='px-4 py-2 mt-3 bg-amber-300 text-xl rounded-full text-red-500'>Click</button>
//     </div>
//   )
// }

// export default App






// import React, { useState } from 'react'

// function App() {
//   useState
//   const [val,setVal] = useState([1,2,4,6,8,20])
//   return (
//     <div className='p-5'>
//       {val.map(item => <h1>{item}</h1>)}
//       <button onClick={()=>setVal(()=>
//       val.filter((item,index)=>index != val.length - 1))}
//          className='px-4 py-2 mt-3 bg-amber-300 text-xl rounded-full text-red-500'>click</button>
//     </div>
//   )
// }

// export default App
















//mastering the use of useState
// import React, { useState } from "react";

// function App() {
//   useState;
//   const [val, setVal] = useState({ name: "Muskan", isBanned: false });
//   return (
//     <div className="p-4">
//       <h1>name:{val.name}</h1>
//       <h2>banned:{val.isBanned.toString()}</h2>
//       <button
//         onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
//         className={`px-4 py-2 mt-3 ${
//           !val.isBanned ? "bg-red-600" : "bg-blue-600"
//         } text-white rounded-full text-xl`}
//       >
//         change
//       </button>
//     </div>
//   );
// }

// export default App;

// //advance use of useState
// import React, { useState } from 'react'

// function App() {
//   useState
//   const [val, setVal] = useState({name:"Muskan", isBanned:false})
//   return (
//     <div className='p-4'>
//       <h1>name:{val.name}</h1>
//       <h2>banned:{val.isBanned.toString()}</h2>
//       <button onClick={()=>setVal({...val, isBanned: !val.isBanned})} className=' px-4 py-2 mt-3 bg-blue-600 text-white rounded-full text-xl'>change</button>
//     </div>
//   )
// }

// export default App

//use state intermidiate
// import React, { useState } from 'react'

// function App() {
//   useState
//   const [val,setVal] = useState(12);
//   return (
//     <div className='p-5'>
//       <h1>{val}</h1>
//       <button onClick = {()=>setVal(prev=>prev+1)} className='px-3 py-2 bg-amber-300 text-xs rounded-full text-red-500'>change kro</button>
//     </div>
//   )
// }

// export default App

//use state basic
// import React, { useState } from "react";
// function App() {
//   const [banned ,setBanned] = useState(false);
//   return (
//     <div className=" p-5">
//        <h1>{banned.toString()}</h1>
//        <button onClick={()=>setBanned(!banned)} className="px-2 py-1 bg-amber-600 text-xs rounded-full text-zinc-100">change</button>
//     </div>
//   );
// }
// export default App;
