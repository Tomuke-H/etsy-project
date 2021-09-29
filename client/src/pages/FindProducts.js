import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Dropdown } from 'semantic-ui-react';
import ProductCard from "../components/ProductCard";

export default function FindProducts() {
  const [sellers, setSellers] = useState([]);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getSellers();
  }, []);

  const renderProducts = () => {
    return products.map((p) => <ProductCard {...p} />);
  };

  const handleChange = async (e, { value }) => {
    try {
      console.log(value)
      let res = await axios.get(`/api/sellers/${value}`);
      console.log(res.data);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getSellers = async () => {
    try {
      let res = await axios.get("/api/sellers");
      let normalizedData = res.data.map((d) => {
        return { key: d.name, text: d.name, value: d.name }
      });
      console.log(normalizedData);
      setSellers(normalizedData);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Find Products</h1>
      <Dropdown
        onChange={handleChange}
        placeholder="Select Sellers"
        fluid
        selection
        options={sellers}
      />
      {products && <Card.Group>{renderProducts()}</Card.Group>}
    </div>
  )
}
