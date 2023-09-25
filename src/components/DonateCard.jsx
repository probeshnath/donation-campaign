import React from 'react'

const DonateCard = ({data}) => {
//    const data = {picture,title,category,category_bg,card_bg,text_button_bg}
//     console.log(data)

  return (
    <div>
        <div className={`relative rounded-lg bg-[${data.card_bg}] bg-clip-border text-gray-700 shadow-md`}>
  <div className="relative overflow-hidden rounded-lg rounded-b-none bg-blue-gray-500 bg-clip-border text-white">
    <img
      src={data.picture}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div className="p-3">
    <h5 className={` block font-sans text-sm font-medium leading-snug tracking-normal text-[${data.text_button_bg}] antialiased `}>
      {data.category}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
     {data.title}
    </p>
  </div>
</div>
    </div>
  )
}

export default DonateCard