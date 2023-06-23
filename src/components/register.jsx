import { Joi } from "joi-browser";
import React, { Component } from "react";

class Register extends Component {
  state = {
    data: {
      name: "",
      address: "",
      hptlname: "",
      dos: "",
      billamount: "",
      picture: "",
    },
  };

  schema = {
    name: Joi.string().required.label("name"),
    address: Joi.string().required.label("address"),
    hptlname: Joi.string().required.label("hsptlname"),
    dos: Joi.date().required.label("date"),
    billamount: Joi.number().required.min(1).label("billamount"),
    picture: Joi.any().required.label("image"),
  };

  render() {
    return (
      <div>
        <form>
          <h3>Register Patient</h3> <br />
          <div className="form-group  col-md-6">
            <label htmlFor="Name">Name</label>
            <input className="form-control"></input> <br />
          </div>
          <div className="form-group  col-md-9">
            <label htmlFor="Name">Address</label>
            <input type="address" className="form-control"></input> <br />
          </div>
          <div className="form-group  col-md-6">
            <label htmlFor="Name">Hospital Name</label>
            <input className="form-control"></input> <br />
          </div>
          <div className="form-group  col-md-6">
            <label htmlFor="Name">Date of Service</label>
            <input type="date" className="form-control"></input> <br />
          </div>
          <div className="form-group  col-md-6">
            <label htmlFor="Name">Bill Amount:</label>
            <input type="number" className="form-control"></input> <br />
          </div>
          <div className="form-group  col-md-6">
            <label htmlFor="Name">Bill Picture</label>
            <input type="file" className="form-control"></input> <br />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
