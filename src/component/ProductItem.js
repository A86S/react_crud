import React, { Component } from 'react';


class ProductItem extends Component {

  constructor(props){
    super(props);

    this.state = {
        isEdit : false,
    }

    this.onEdit = this.onEdit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }  

  onEdit(){
    this.setState({ isEdit : true });
  }

  onUpdate(e){
    e.preventDefault();
    const { id } = this.props;
    this.props.onUpdate(id, this.nameInput.value, this.priceInput.value);
    this.nameInput.value = '';
    this.priceInput.value = '';
    this.setState({isEdit : false});
  }

  onDelete(){
     const { id, onDelete } = this.props;
     onDelete(id);
  }

  render() {

    const { name, price }  = this.props;
    const { isEdit } = this.state;

     return (
        <div>
            {
            isEdit ? 
            
            <form onSubmit={this.onUpdate}>
                <span>
                    <input 
                        placeholder='Name' 
                        defaultValue={name} 
                        ref={ nameInput => this.nameInput = nameInput }/>
                </span>
                {` | `}
                <span>
                    <input 
                        placeholder='Price' 
                        defaultValue={price} 
                        ref={ priceInput => this.priceInput = priceInput }/>
                </span>
                {` | `}
                <button>Update</button>    
            </form>
            
            :
                <div>
                <span>{name}</span> 
                {' | '}
                <span>{price +` $`}</span>
                {` | `} 
                <button onClick={this.onEdit}>Edit</button>
                <button onClick={this.onDelete}>Delete</button>
                </div>
            }
            
        </div>
    );
  }
}

export default ProductItem;
