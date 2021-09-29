import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Button } from 'semantic-ui-react';
import DoughnutGraph from '../components/DoughnutGraph';

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
  const [toggleGraph, setToggleGraph] = useState(false)

  useEffect(()=>{
    getAveragePrice()
  },[])

  const normalizeAvg = (data) => {
    let categories = data.map(d => d.category)
    let avgs = data.map(d=> d.avg)

    return { 
      labels: categories, 
      datasets: [{
        label: 'Hide All', 
        data: avgs,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }]
    }
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
      <Button onClick={()=>setToggleGraph(!toggleGraph)}>Switch Chart</Button>
      {toggleGraph && <h2>Average Price of Product per Category</h2>}
      {toggleGraph && <Bar data={avgPrices} options={options}/>}
      {!toggleGraph && <h2>Number of products by Category</h2>}
      {!toggleGraph && <DoughnutGraph />}
    </div>
  )
}

export default Charts;