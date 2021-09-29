import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';

const backgroundColors = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
]

const borderColors = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
]


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Charts = () => {
  const [avgPrices, setAvgPrices] = useState([])

  useEffect(()=>{
    getAveragePrice()
  },[])

  const normalizeAvg = (data) => {
    let categories = data.map(d => d.category)
    let avgs = data.map(d=> d.avg)

    console.log(data)
    return { labels: categories, datasets: [{
      label: 'Avg Price', 
      data: avgs,
      backgroundColor: backgroundColors,
      borderColor: borderColors,
      borderWidth: 1
    }]}
  }

  const getAveragePrice = async () => {
    try {
      let res = await axios.get('/api/avg_price')
      setAvgPrices(normalizeAvg(res.data))
    }catch(err){
      console.log(err)
    }
  }
  return(
    <div>
      <h1> Charts! </h1>
      <Bar data={avgPrices} options={options}/>
    </div>
  )
}

export default Charts;