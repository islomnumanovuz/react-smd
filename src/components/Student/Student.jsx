import React, {Component} from "react";
import { data } from "../mock/data";

export class Student extends  Component{
  constructor() {
    super()
    this.state = {
      data: data
    }
  }
  render() {

    const onDelete = (id) => {
      let result = this.state.data.filter((item) => item.id !== id)
      console.log(result);
      this.setState({data: result})
    }

    return (
      <div className="container">
        <div className="wrapper">
        <div className="inputs">
					<input
						placeholder="Search by Id"
						name="id"
					></input>
					<input
						placeholder="Search by Name"
						name="name"
					></input>
					<input
						placeholder="Search by Status"
						name="status"
					></input>
				</div>
        
        <table>
        <thead>
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
            this.state.data.map(({id, name, age, status, address}) => {
              return(
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{address}</td>
                  <td>{status}</td>
                  <td>
                    <button onClick={() => onDelete(id)}>
                      Delete
                    </button>
                    <button>
                      Edit
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
        </table>
        </div>
      </div>
    )
  }
}