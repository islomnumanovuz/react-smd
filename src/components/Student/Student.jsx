import React, {Component} from "react";
import { data } from "../mock/data";

export class Student extends  Component{
  constructor() {
    super()
    this.state = {
      data: data,
      name: "",
      age: "",
      address: "",
      status: "",
      search: "id"

    }
  }
  render() {
    const onChange = event => {
      this.setState({[event.target.name]: event.target.value})

    }
    const onSearch = (e) => {
      const {value} = e.target
      let result = data.filter((item) => `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase()))
      this.setState({data: result})
    }

    const onDelete = (id) => {
      let result = this.state.data.filter((item) => item.id !== id)
      this.setState({data: result})
    }
    const onAdd = () => {
      let newUser = {
        id: data.length + 1,
        name: this.state.name[0].toUpperCase() + this.state.name.slice(1),
        age: this.state.age,
        address: this.state.address[0].toUpperCase() + this.state.address.slice(1),
        status: this.state.status.toUpperCase(),
      }
      this.setState({
        data: [...this.state.data, newUser],
        name: "",
        age: "",
        address: "",
        status: "",
      })
    }
    const onSelect = (event) => {
      this.setState({search: event.target.value})
    }

    return (
      <div className="container">
        <div className="wrapper">
        <table>
        <thead>
          <tr>
            <th colSpan={6}>
              <h6 className="text-center">Search item</h6>
              <div className="input-group input-group-sm pb-1">
                <input value={this.state.name} name="name" onChange={onChange} type="text" className="form-control" placeholder="Name" aria-label="Name" />
                <input value={this.state.age} name="age" onChange={onChange} type="number" className="form-control" placeholder="Age" 
                aria-label="Age" />
                <input value={this.state.address} name="address" onChange={onChange} type="text" className="form-control" placeholder="Address" 
                aria-label="Address" />
                <input value={this.state.status} name="status" onChange={onChange} type="text" className="form-control" placeholder="Status" 
                aria-label="Status" />
                
                <button className="btn btn-primary" onClick={onAdd}>Add item</button>

              </div>
              <div className="input-group input-group-sm pb-1">
                <input onChange={onSearch} type="text" className="form-control" placeholder="Search" aria-label="Dollar amount (with dot and two decimal places)" />
                <span className="input-group-text">
                  <select onChange={onSelect} className="form-select" aria-label="Default select example">
                    <option hidden >Search by</option>
                    <option value="id">Id</option>
                    <option value="name">Name</option>
                    <option value="address">Address</option>
                    <option value="status">Status</option>

                  </select>
                </span>
               
              </div>
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.data.length ?
            this.state.data.map(({id, name, age, status, address}) => {
              return(
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{address}</td>
                  <td>{status}</td>
                  <td>
                    <button className="btn btn-outline-danger" onClick={() => onDelete(id)}>
                      Delete
                    </button>
                    <button className="btn btn-outline-secondary">
                      Edit
                    </button>
                  </td>
                </tr>
              )
            }) :
            <tr>
              <td colSpan={6}>
                <h2 className="text-center">Ooops no data :(</h2>
              </td>
            </tr>
          }
        </tbody>
        </table>
        </div>
      </div>
    )
  }
}