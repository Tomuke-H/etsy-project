import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutGraph = () => {
  const [avgProducts, setAvgProducts] = useState([])

  const colors= [      
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
];


  const normalizeData = (data) => {
    let categories = data.map(d => d.category)
    let products = data.map(d=> d.count)



    return { 
      labels: categories, 
      datasets: [{
        label: 'Avg products by seller', 
        data: products,
        backgroundColor: colors
      }]
    }
  }

  useEffect(()=>{
    getData();
  },[])

  const getData = async() => {
    try {
      let res = await axios.get('/api/avg_products')
      setAvgProducts(normalizeData(res.data))
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div style={{width: '70%', height: '70%'}}>
      <Doughnut data={avgProducts} />
    </div>
  )
}

export default DoughnutGraph;