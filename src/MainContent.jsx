import React, { Component } from "react";

export default class MainContent extends Component {
    state = { pageTitle: "Customers",
              customerCount: 5,
              customers: [
                {
                    id: 1, 
                    name: "Leon", 
                    phone:"051-313", 
                    address: {city: "Beaverton"}
                },
                {
                    id: 2, 
                    name: "Leona", 
                    phone:"123-456", 
                    address: {city: "Aloha"}
                },
                {
                    id: 3, 
                    name: "Loene", 
                    phone:null, 
                    address: {city: "Clackamas"}
                },
                {
                    id: 4, 
                    name: "Loena", 
                    phone:"051-320", 
                    address: {city: "Milwaukie"}
                },
                {
                    id: 5, 
                    name: "Loops", 
                    phone:"051-332", 
                    address: {city: "Tigard"}
                }
              ]
    };

    onRefresh=() => {
        this.setState({
            customerCount: 7
        })
    }

    render() {
        return (
        <div>
            <h4 className="border-bottom m-1 p-1">{ this.state.pageTitle }    

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
                <tbody>
                {
                    this.state.customers.map((cust) => {
                        return (
                            <tr key={cust.id}>
                                <td>{cust.id}</td>
                                <td>{cust.name}</td>
                                <td>
                                    {!cust.phone? (
                                    <div className="bg-warning p-2 text-center">N/A</div>
                                    ):(
                                        cust.phone
                                    )}</td>
                                <td>{cust.address.city}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
        );
    }
}