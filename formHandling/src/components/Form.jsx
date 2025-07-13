import React from 'react'

function Form() {
    
  const {register , handleSubmit} = useForm();
  return (
    <div className='mt-10 flex gap-10 justify-center'>
       <form  className='flex gap-10' >
        <input {...register('name')}  className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='name'/>
        <input {...register('email')}  className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='email' />
        <input {...register('password')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='image url' />
        <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="submit" />
       </form>
    </div>
  )
}

export default Form
