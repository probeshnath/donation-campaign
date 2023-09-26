import React from 'react'
import {useNavigate} from 'react-router-dom'

const DonateCard = ({data}) => {
//    const data = {picture,title,category,category_bg,card_bg,text_button_bg}
    // console.log(data)
    const navigate = useNavigate();

    const seeDetails = () =>{
      navigate(`/donations/${data.id}`)
    }

  return (
    <div onClick={seeDetails} className='cursor-pointer'>
        <div style={{background:data.card_bg}} className={`relative rounded-lg bg-clip-border text-gray-700 shadow-md`}>
          <div className="relative overflow-hidden rounded-lg rounded-b-none bg-blue-gray-500 bg-clip-border text-white">
            <img
              src={data.picture}
              alt="img-blur-shadow"
              layout="fill"
            />
        </div>
        <div className="p-3">
          <p style={{color:data.text_button_bg, background:data.category_bg}} className={`capitalize w-20 p-1 rounded-md block font-sans text-sm font-medium leading-snug tracking-normal text-[${data.text_button_bg}] antialiased `}>
            {data.category}
          </p>
          <p style={{color:data.text_button_bg}} className="block font-sans text-base font-bold leading-relaxed text-inherit antialiased">
          {data.title}
          </p>
        </div>
      </div>
   </div>
  )
}

export default DonateCard