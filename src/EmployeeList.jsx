import React, { Component } from 'react';
import axios from 'axios'
import { List, Image } from 'semantic-ui-react'

class EmployeeList extends Component {
  state = {
    employees: []
  };
  async fetchEmployees() {
    let employeesList = await axios.get('https://reqres.in/api/users?per_page=5');
    this.setState({ employees: employeesList.data.data });
  }
  componentDidMount() {
    this.fetchEmployees();
  }
  render() {
    let { employees } = this.state;
    let employeesList = employees.map(employee => {
      return (
        <List.Item key={employee.id}>
          <Image avatar src={employee.avatar} />
          <List.Content>
            <List.Header as='p'>{`${employee.first_name} ${employee.last_name}`}</List.Header>
            <List.Description>
              {`${employee.first_name}@email.com`}
            </List.Description>
          </List.Content>
        </List.Item>
      )
    });
    return <List>{employeesList}</List>;
  }
}

export default EmployeeList;