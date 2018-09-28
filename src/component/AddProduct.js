import React, { Component } from 'react';

class AddProduct extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }  

  onSubmit(e){
    e.preventDefault();

    const name = this.nameInput.value;
    const price = this.priceInput.value;
    this.props.onAdd(name, price);
    
    this.nameInput.value = '';
    this.priceInput.value = '';
  }

  render() {

     return (
        <form onSubmit={this.onSubmit}>
                <h3>Add Product</h3>
                <span><input placeholder='Name' ref={ nameInput => this.nameInput = nameInput }/></span>
                {` | `}
                <span><input placeholder='Price' ref={ priceInput => this.priceInput = priceInput }/></span>
                {` | `}
                <button>Add</button>
        </form>
    );
  }
}

export default AddProduct;
