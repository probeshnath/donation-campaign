import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Donations from '../../components/Donations'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const [searchQuery , setSearchQuery] = useState("")
  const allDonateItem = useLoaderData();
  const [searchDonateItem, setSearchDonateItem]=useState (allDonateItem)

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

const searchDonate = () =>{
  const searchData = allDonateItem.filter((item) =>
  item.category.includes(searchQuery)
);

setSearchDonateItem(searchData);
console.log("search data",searchData)
}
  return (
    <div>
        <Header handleSearchInputChange={handleSearchInputChange} searchDonate={searchDonate} ></Header>
        <Donations searchData={searchDonateItem} handleSearchInputChange={handleSearchInputChange} searchDonate={searchDonate} />
    </div>
  )
}

export default Home