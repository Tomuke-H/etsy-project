import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutGraph = () => {
  const [avgProducts, setAvgProducts] = useState([])

  const colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
     'maroon', 'navy', 'orange', 'purple', 'red', 
    'silver', 'teal', 'white', 'yellow'];


  const normalizeData = (data) => {
    let sellers = data.map(d => d.name)
    let products = data.map(d=> d.count)



    return { 
      labels: sellers, 
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
    <Doughnut data={avgProducts} />
  )
}

export default DoughnutGraph;