import React, { Component } from "react";

export default class MainContent extends Component {
    state = { pageTitle: "Customers",
              customerCount: 5,
              customers: [
                {
                    id: 1, 
                    name: "Leon", 
                    phone:"051-313", 
                    address: {city: "Beaverton"},
                    photo: "https://picsum.photos/id/1010/60"
                },
                {
                    id: 2, 
                    name: "Leona", 
                    phone:"123-456", 
                    address: {city: "Aloha"},
                    photo: "https://picsum.photos/id/1011/60"
                },
                {
                    id: 3, 
                    name: "Loene", 
                    phone:null, 
                    address: {city: "Clackamas"},
                    photo: "https://picsum.photos/id/1012/60"
                },
                {
                    id: 4, 
                    name: "Loena", 
                    phone:"051-320", 
                    address: {city: "Milwaukie"},
                    photo: "https://picsum.photos/id/1013/60"
                },
                {
                    id: 5, 
                    name: "Loops", 
                    phone:"051-332", 
                    address: {city: "Tigard"},
                    photo: "https://picsum.photos/id/1014/60"
                }
              ]
    };

    onRefresh=() => {
        this.setState({
            customerCount: 7
        });
    }

    getPhoneToRender = (phone) => {
        {
            return !phone? (
            <div className="bg-warning p-2">N/A</div>
            ):(
                phone
            )}
    }

    getCustomerRow = () => {
        {
            return (this.state.customers.map((cust) => {
                return (
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td><img src={cust.photo} alt="Customer"/></td>
                        <td>{cust.name}</td>
                        <td>{this.getPhoneToRender(cust.phone)}</td>
                        <td>{cust.address.city}</td>
                    </tr>
                )
            }))
        }
    }

    render() {
        return (
        <div>
            <h4 className="m-1 p-1">{ this.state.pageTitle }    

                <span className="badge bg-secondary m-2">{this.state.customerCount}
                </span>
                <button className="btn btn-info" onClick={this.onRefresh}>Refresh</button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>{this.getCustomerRow()}</tbody>
            </table>
        </div>
        );
    }
}