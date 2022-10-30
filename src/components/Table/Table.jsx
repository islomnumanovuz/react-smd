import React, {Component} from "react";
import {data} from "../../mock/data"

export class Table extends Component{
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="wrapper">
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
            data.map(({id, name, age, status, address}) => {
              return(
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{address}</td>
                  <td>{status}</td>
                  <td>
                    <button>
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