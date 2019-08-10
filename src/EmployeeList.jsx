import React, { Component } from 'react';
import axios from 'axios'

class EmployeeList extends Component {
  componentDidMount() {
    this.fetchEmployees()
  }

  async fetchEmployees() {
    let employees = await axios.get('https://reqres.in/api/users?per_page=5')
  }
  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default EmployeeList;