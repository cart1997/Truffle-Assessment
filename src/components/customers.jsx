import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paging from "./common/paging";
import { paginate } from "./common/page";

class Customers extends Component {
  state = {
    customers: [],
    currentPage: 1,
    pageSize: 4,
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.customers;
    const { pageSize, currentPage, customers: allcustomers } = this.state;

    const customers = paginate(allcustomers, currentPage, pageSize);

    return (
      <div>
        <h4>Patient details</h4>
        <br />

        <Link to="/register">
          <button className="btn btn-primary">Add Patient</button>
        </Link>
        <br />
        <br />

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>HospitalName</th>
              <th>Service</th>
              <th>Billamount</th>
              <th>Bill Picture</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr>
                <td>{customer.title}</td>
                <td>{customer.genre.name}</td>
                <td>{customer.numberInStock}</td>
                <td>{customer.dailyRentalRate}</td>
                <td>{customer.genre.name}</td>
                <td>{customer.genre.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Paging
          itemCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPage={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Customers;
