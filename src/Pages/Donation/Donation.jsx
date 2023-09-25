import DonationCard from "./DonationCard"


const Donation = () => {
  return (
   <div className="max-w-6xl mx-auto">
     <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-5'>
      <DonationCard />
      <DonationCard />
      <DonationCard />
      <DonationCard />
      <DonationCard />
      
    </div>
    <div className="py-5 text-center">
      <button className="bg-[#009444] text-white py-3 px-8 rounded-lg">See All</button>
    </div>
   </div>
  )
}

export default Donation