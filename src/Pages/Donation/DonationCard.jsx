import React from 'react'

const DonationCard = () => {
  return (
    <div>
        <div class="relative flex max-w-[48rem] flex-row rounded-md bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-md rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
      alt="image"
      class="h-full w-full object-cover"
    />
  </div>
  <div class="p-3">
    <h6 class="mb-3 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      startups
    </h6>
    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Lyft launching cross-platform service this week
    </h4>
    <p class="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Like so many organizations
      
    </p>
    
      <button
        class=" rounded-lg py-3 px-6 text-center text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      > Learn More </button>
   
  </div>
</div>
    </div>
  )
}

export default DonationCard