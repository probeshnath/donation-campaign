import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
  const [donateItem, setDonateItem] = useState([]);
  const allDonateItem = useLoaderData();

  useEffect(() => {
    const localDonation = localStorage.getItem('donatePrice');
    setDonateItem(JSON.parse(localDonation));
  }, []);

  return (
    <div className='max-w-6xl mx-auto flex justify-center items-center'>
      {/* {donateItem?.length === 0 ? (
        <>
          <h1>At first, please donate.</h1>
          <Chart
            type='pie'
            width={500}
            height={500}
            series={[0, allDonateItem?.length || 0]} // Ensure allDonateItem is defined
            options={{
              labels: ['Your Donation', 'Total Donation'],
            }}
          />
        </>
      ) : ( */}
        <Chart
          type='pie'
          width={500}
          height={500}
          series={[donateItem?.length || 0, allDonateItem?.length || 0]} // Ensure allDonateItem is defined
          options={{
            labels: ['Your Donation', 'Total Donation'],
          }}
        />
      {/* )} */}
    </div>
  );
};

export default Statistics;
