import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react';

const sellers = [
    {name: 'Steve',
    id:1,
    products: [
        {
            description: 'Something cool',
            price: 435,
            category: 'Food'
        },
        {
            description: 'Something else cool',
            price: 357,
            category: 'Entertainment'
        },
        {
            description: 'Something super cool',
            price: 32,
            category: 'Travel'
        }
    ]},
    {name: 'Frank',
    id: 2,
    products: [
        {
            description: 'Something cool',
            price: 435,
            category: 'Food'
        },
        {
            description: 'Something else cool',
            price: 357,
            category: 'Entertainment'
        },
        {
            description: 'Something super cool',
            price: 32,
            category: 'Travel'
        }
    ]},
    {name: 'Billy',
    id: 3,
    products: [
        {
            description: 'Something cool',
            price: 435,
            category: 'Food'
        },
        {
            description: 'Something else cool',
            price: 357,
            category: 'Entertainment'
        },
        {
            description: 'Something super cool',
            price: 32,
            category: 'Travel'
        }
    ]}
]

const Products = () =>{
    // const [products, setProducts] = useState([])

    useEffect(()=>{
        getData();
    },[])

    const normalizeData = (data) => {
        console.log(data)
        //do something to the data
    }

    const getData = async () => {
        try{
            let res = await axios.get('/api/products')
            normalizeData(res.data)
        }catch (err){
            console.log(err)
        }
    }

    const renderProducts = (products) => {
        return products.map(p => {
            return (
                <Table.Row>
                    <Table.Cell>{p.description}</Table.Cell>
                    <Table.Cell>{p.price}</Table.Cell>
                    <Table.Cell>{p.category}</Table.Cell>
                </Table.Row>
            )
        })
    }

    const renderList = () => {
        return sellers.map(s => {
           return (
                <div key={s.id}>
                    <h1>{s.name}</h1>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                                <Table.HeaderCell>Price</Table.HeaderCell>
                                <Table.HeaderCell>Category</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header> 
                        <Table.Body>
                            {renderProducts(s.products)}
                        </Table.Body>
                    </Table>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>Products Page</h1>
            {renderList()}
        </div>
    )
}

export default Products;