import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DonationDetail = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  const [donate, setDonate] = useState(null);
  const [donateTaka, setDonateTaka] = useState([])
  console.log(datas)

  useEffect(() => {
    // Find the donation data with the matching id
    const donation = datas.find((data) => data.id == id);

    // Set the donation data to the state
    if (donation) {
      setDonate(donation);
    }
  }, [datas, id]);
  console.log("donation", donate)

  if (!donate) {
    // Handle the case where the donation data is still loading or not found
    return <div>Loading...</div>;
  }

  // donation process
   const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('donatePrice');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const donateMoney = id =>{
  const storedJobApplications = getStoredJobApplication();
  const exists = storedJobApplications.find(jobId => jobId === id);
  if(!exists){
      storedJobApplications.push(id);
      localStorage.setItem('donatePrice', JSON.stringify(storedJobApplications))
  }
}



  return (
    <div className='relative max-w-6xl mx-auto'>
      <div className='w-full h-[400px] relative'>
        <img className='w-full relative h-[400px]' src={donate.picture} alt='' />
        <div className='absolute -mt-[84px] bg-[#00000094] p-5 w-full text-white'>
          <button className='bg-[#FF444A] text-lg font-medium text-white px-4 rounded-sm py-2' onClick={()=> donateMoney(donate.id)} >
            Donate {donate.price}
          </button>
        </div>
      </div>

      <h2 className='text-4xl font-semibold pt-7 pb-3'>{donate.title}</h2>
      <p className='text-base font-normal pb-10'>{donate.description}</p>
    </div>
  );
};

export default DonationDetail;
 
