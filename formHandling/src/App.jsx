import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

function App() {
  const [users , setUsers] = useState([1]);

  const handleFormSubmitData = (data) => {
    setUsers([...users,data])
  }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='container mx-auto'>
         <Cards users = {users}/>
         <Form />
      </div>
     
    </div>
  )
}

export default App













// import React from 'react'
// import { useForm } from 'react-hook-form'

// function App() {
//   const {register , handleSubmit} = useForm();
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit(data => console.log(data))}>
//         <input {...register('name')} type="text" placeholder='name' />
//         <input {...register('email')} type="email" placeholder='email' />
//         <input type="submit" />
//       </form>
      
//     </div>
//   )
// }

// export default App









//this is the second way of form handling that is control components
// import React, { useState } from 'react'

// function App() {
//   const [ val , setVal] = useState({name:""});

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(val);
//   }
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input onChange={(event)=>setVal({...val , name:event.target.value})} type="text" placeholder='name' />
//         <input onChange={(event)=>setVal({...val ,email:event.target.value})} type="email" placeholder='email' />

//         <input type="submit" />
//       </form>
      
//     </div>
//   )
// }

// export default App












//this is the first way of form handling that is useRef

// import React, { useRef } from 'react'

// function App() {
//    const name = useRef(null);
//    const age = useRef(null);

//    const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(name.current.value , age.current.value);
//   }

//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <input ref={name} placeholder='name' type="text" />
//       <input ref={age} placeholder='age' type="text" />
//       <input  type="submit" />
//     </form>
//   )
// }

// export default App

