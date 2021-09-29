import React from "react";
import axios from "axios";
import { Form, Table } from "semantic-ui-react"

const categories = [
  "Travel",
  "Clothes",
  "Furniture",
  "Food",
  "Entertainment",
];

const options = categories.map((c) => {
  return { key: c, text: c, value: c };
});

class Categories extends React.Component {
  state = { category: null, products: [] };

  handleChange = (e, { value }) => {

    this.setState({ category: value, products: [] }, () => {
      this.getProducts();
    })
  }

  getProducts = () => {
    const { category }  = this.state;
    axios.get(`/api/categories/${category}`).then((res) => {
      const { products } = res.data;
      this.setState({
        products: [...products],
      });
    });
  };


  render() {
    const { products } = this.state;
    return(
      <div>
        <Form.Select options={options} onChange={this.handleChange} />
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Seller</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {products.map((p) => (
              <Table.Row key={p.id}>
                <Table.Cell>${p.price}</Table.Cell>
                <Table.Cell>{p.description}</Table.Cell>
                <Table.Cell>{p.name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }


}

export default Categories;