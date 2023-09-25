import React from 'react'

const DonationDetail = () => {
  return (
    <div className='relative'>
        <div className='w-full h-[400px] relative'>
        <img className='w-full relative h-[400px]' src="https://i.ibb.co/NFDtqxj/Food.png" alt="" />
        <div className='absolute -mt-[84px] bg-[#00000094] p-5 w-full text-white'>
            <button className='bg-[#FF444A] text-lg font-medium text-white px-4 rounded-sm py-2'>Donate $200</button>
        </div>
        </div>

        <h2 className='text-4xl font-semibold pt-7 pb-3'>Good Education</h2>
        <p className='text-base font-normal pb-10'>There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.</p>
    </div>
  )
}

export default DonationDetail