import React from 'react'

const Staffinfo = () => {
  return (
    <div className="bg-pink-50  p-8">
      
       <h3 className='font-bold px-20 mt-2 py-4 bg-white shadow-xl w-1/8 mb-2  border-black underline'>All company info here </h3>
         <div className=''></div>
       <div className='shadow-xl bg-white'> 
       <div class="flex items-center px-96 mt-4">
    <h2 class="mr-10">Code</h2>
    <input 
        class='w-96 px-4 rounded-lg bg-slate-200'
        type="text"
        placeholder='Code'
    />

<h2 class="mr-2 ml-24">Date</h2>
    <input 
        class='w-48 px-4 rounded-lg bg-slate-200'
        type="date"
        placeholder='Date'   />
</div>

<div class="flex items-center px-96 mt-4">
    <h2 class="mr-10">Name</h2>
    <input 
        class=' px-4 rounded-lg bg-slate-200'
        type="text"
        placeholder='Name'
        style={{ width: '50rem' }}
    />
    </div>

    <div class="flex items-center px-96 mt-4">
    <h2 class="mr-7">Address</h2>
    <input 
        class=' px-4 rounded-lg bg-slate-200'
        type="text"
        placeholder='Address'
        style={{ width: '50rem' }}
    />
    </div>

 <div class="flex items-center px-96 mt-4">
    <h2 class="mr-6">Phone No</h2>
    <input 
        class='w-64 px-4 rounded-lg bg-slate-200 mr-2'
        type="text"
        placeholder='Phone No'
    />

    <h2 class="mr-2 ml-4">NIC No</h2>
    <input 
        class='w-48 px-4 rounded-lg bg-slate-200'
        type="text"
        placeholder='NIC No'
    />

    
</div>
<div class="flex items-center px-96 mt-4 mb-4">
    <h2 class="mr-6">Remarks</h2>
    <textarea
        class='w-64 px-4 rounded-lg bg-slate-200 mr-2'
        type="comment"
        placeholder='Remark'
    />


<button class='py-1 ml-28 px-8 bg-gray-400 rounded-sm font-bold text-center hover:scale-90 duration-700 hover:bg-red-400'>
    User Right
</button>

    </div>
    </div>

    <div className='shadow-xl bg-white'> 
       <div class="flex items-center px-96 mt-6">
       <h2 class="">Login Types</h2>
    <input 
        class='w-72 px-4 rounded-lg bg-slate-200 mr-4'
        type="text"
        placeholder='Login Types'
    />

    <h2 class="mr-2">Login</h2>
    <input 
        class='w-48 px-4 rounded-lg bg-slate-200'
        type="text"
        placeholder='Login'
    />
    </div>

    <div class="flex items-center px-96 mt-4">
    <h2 class="mr-2">New Pass</h2>
    <input 
        class='w-60 px-4 rounded-lg bg-slate-200 mr-4'
        type="text"
        placeholder='New Pass'
    />

    <h2 class="mr-2 ml-5">Conf Pass</h2>
    <input 
        class='w-48 px-4 rounded-lg bg-slate-200'
        type="text"
        placeholder='Conf pass'
    />
</div>
</div>



<div class="flex justify-end mt-12">
    <button class='px-4 mr-4 bg-gray-400 rounded-lg font-bold text-align hover:scale-90 duration-700 hover:bg-green-400'>
        New  
    </button>
    <button class='px-4 mr-4 bg-gray-400 rounded-lg font-bold text-align hover:scale-90 duration-700 hover:bg-red-400'>
        Delete
    </button>
    <button class='px-4 mr-4 bg-gray-400 rounded-lg font-bold text-align hover:scale-90 duration-700 hover:bg-yellow-400'>
        Search
    </button>
    <button class='px-4 mr-4 bg-gray-400 rounded-lg font-bold text-align hover:scale-90 duration-700 hover:bg-red-400'>
        Close
    </button>
</div>




</div>

  )
}

export default Staffinfo;
