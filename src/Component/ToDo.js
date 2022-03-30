import React, { Component } from 'react'

export default class ToDo extends Component {
    state = {
        listItems: [],
        priceLists: [],
        listName: '',
        price: '',
        totalPrice: '',
    }

    handleChange = (e) => {
        if(e.target.name === 'listName'){
            this.setState({
                listName: e.target.value
            })
        }
        else if(e.target.name === 'price'){
            this.setState({
                price: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { listItems, priceLists,  listName, price } = this.state;

        if(listName !== '' && price !== ''){
            listItems.push(listName.toString())
            priceLists.push(parseInt(price))
            
            const totalPrice = priceLists.reduce((a, b) => a + b, 0);
    
            this.setState({
                listItems,
                priceLists,
                listName: '',
                price: '',
                totalPrice: totalPrice,
            });
        }

    }

    render() {
        const { listItems, priceLists,  listName, price, totalPrice } = this.state;

        return(
            <>
                <div className="card my-5">
                    <div className="card-header">
                        <h3 className="card-title text-center">My to do list</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row g-2">
                                <div className="col-md-8">
                                    <input type="text" name="listName" className="form-control mb-3" placeholder="Write your to do" value={listName} onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-4">
                                    <input type="number" name="price" className="form-control mb-3" placeholder="Amount" value={price} onChange={this.handleChange} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Add List</button>
                        </form>
                        <div className="d-flex justify-content-between mt-4">
                            <ul>
                                {listItems.map(item => (
                                    <li key={item.toString()}>{item}</li>
                                ))}
                            </ul>
                            <ul className="ps-0">
                                {priceLists.map(priceList => (
                                    <li key={priceList.toString()}>{priceList}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {
                        totalPrice === '' ? '' :  <div className="card-footer">
                            <h2 className="text-center">Total price: {totalPrice}</h2>
                        </div>
                    }
                   
                </div>
               
            </>
        )
       
    }
}
