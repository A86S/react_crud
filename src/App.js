import React, { Component } from 'react';
import './App.css';
import ProductItem from './component/ProductItem';
import AddProduct from './component/AddProduct';

const products  = [
  { id:1, name: 'Android', price: 105}, 
  { id:2, name: 'iPhone', price: 501}, 
  { id:3, name: 'Windows', price: 119}
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  

  componentWillMount(){
    const products = this.getProducts(); 
    this.setState({ products });
  }

  constructor(props){
    super(props);
    this.state = {
        products: JSON.parse(localStorage.getItem('products'))
    }

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  getProducts(){
    return this.state.products;
  }

  onUpdate(id, newName, newPrice){
    let products = this.getProducts();
    products = products.map( product => {
        if(product.id === id){
            product.name = newName;
            product.price = newPrice;
           
        }
        return product;
    })

    this.setState({products});
  }

  onAdd(name, price){
      const products = this.getProducts();
      const key = this.generatekey();
      
      products.push({
        id: key, 
        name, price
      });

      this.setState({products});
  }

  onDelete(id){
    const products = this.getProducts();  
    const filterProducts = products.filter(product => {
        return product.id !== id;
    });

    this.setState({products : filterProducts});
  }

  generatekey() {
    return new Date().getTime();
  }

  render() {

    const { products }  = this.state;

     return (

      <div className="App">
          <h1>Product Manager</h1>
          <AddProduct onAdd={this.onAdd}/>
          <hr />
          <div>{
            products.map( item => {
              return <ProductItem 
                key={item.id}
                {...item}
                onDelete = {this.onDelete}
                onUpdate = {this.onUpdate}
              />
            })
          }</div>
      </div>
    );
  }
}

export default App;
