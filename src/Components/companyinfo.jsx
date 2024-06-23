import React from 'react'

const companyinfo = () => {
  return (
    <div>
       <h3 className='font-bold px-20 mt-5 shadow-xl w-1/4 mb-2  border-black underline'>All company info here </h3>
       <div class="flex items-center px-96 mt-4">
    <h2 class="mr-10">Factory Name</h2>
    <input 
        class='w-96 px-2 bg-gray-200 rounded-full'
        type="text"
        placeholder='Factory name'
    />
</div>

<div class="flex items-center px-96 mt-4">
    <h2 class="mr-6">Factory Address</h2>
    <input 
        class='w-96 px-2 bg-gray-200 rounded-full'
        type="text"
        placeholder='Factory Address'
    />
</div>

<div class="flex items-center  px-96 mt-4">
    <h2 class="mr-16">Phone No </h2>
    <input 
        class='w-96 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='Phone No'
    />
</div>

<div class="flex items-center px-96 mt-4">
    <h2 class="mr-6">Indicator Name</h2>
    <input 
        class='w-96 px-2 bg-gray-200 rounded-full'
        type="text"
        placeholder='Indicator Name'
    />
</div>

<div class="flex items-center px-96 mt-4">
    <h2 class="mr-24">Speed</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='Speed'
    />

<h2 class=" ml-24 mr-6">Com Port</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='Com Port'
    />
</div>



<div class="flex items-center px-96 mt-4">
    <h2 class="mr-24">Parity</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='Parity'
    />

<h2 class=" ml-24 mr-6">Port Setting</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='Port Setting'
    />
</div>
<div class="flex items-center px-96 mt-4">
    <h2 class="mr-20">Data Bit</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='Data Bit'
    />

<h2 class=" ml-24 mr-6">Weight Slip</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='Weight Slip'
    />
</div>

<div class="flex items-center px-96 mt-4">
    <h2 class="mr-20">Stop Bit</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='Stop Bit'
    />

<h2 class=" ml-24 mr-12">Bardana</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='Bardana'
    />
</div>

<div class="flex items-center px-96 mt-4">
    <h2 class="mr-24">Right</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='Right'
    />

<h2 class=" ml-24 mr-6">KG per Munt</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='KG per Munt'
    />
</div>

<div class="flex items-center px-96 mt-4">
    <h2 class="mr-28">Left</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='Left'
    />

<h2 class=" ml-24 mr-10">Divide by</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="Number"
        placeholder='Divide by'
    />
</div>

<div class="flex items-center px-96 mt-4">
    <h2 class="mr-28">Filter</h2>
    <input 
        class='w-36 rounded-full'
        type="checkbox"
        
    />

<h2 class=" ml-2 mr-12">Allow Third weight</h2>
    <input 
        class='w-24 px-2 bg-gray-200 rounded-full'
        type="checkbox"
        
    />
</div>

<div class="flex items-center px-96 mt-4">
    <h2 class="mr-6">Scale Compony</h2>
    <input 
        class='w-96 px-2 bg-gray-200 rounded-full'
        type="text"
        placeholder='Scale Compony'
    />
</div>


<div class="flex justify-end mt-4 ">
    <button class='px-4 mr-6 bg-gray-400 rounded-lg font-bold text-align hover:scale-90 duration-700 hover:bg-green-600'>
        Update
    </button>

    <button class='px-4 mr-96 bg-gray-400 rounded-lg font-bold text-align hover:scale-90 duration-700 hover:bg-red-400' >
        Close
    </button>
</div>






</div>

  )
}

export default companyinfo;
