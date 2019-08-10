import React from 'react'
import { shallow, mount } from 'enzyme'
import axios from 'axios'
import EmployeeList from '../EmployeeList'

describe('<EmployeeList />', () => {
  it('should fetch data from external api using Axios', () => {
    const axiosSpy = jest.spyOn(axios, 'get')
    shallow(<EmployeeList />)
    expect(axiosSpy).toBeCalled()
  });

  it('and render a list of 5 employees', async () => {
    const employees = {  
      "page":1,
      "per_page":5,
      "total":12,
      "total_pages":3,
      "data":[  
         {  
            "id":1,
            "email":"george.bluth@reqres.in",
            "first_name":"George",
            "last_name":"Bluth",
            "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
         },
         {  
            "id":2,
            "email":"janet.weaver@reqres.in",
            "first_name":"Janet",
            "last_name":"Weaver",
            "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
         },
         {  
            "id":3,
            "email":"emma.wong@reqres.in",
            "first_name":"Emma",
            "last_name":"Wong",
            "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
         },
         {  
            "id":4,
            "email":"eve.holt@reqres.in",
            "first_name":"Eve",
            "last_name":"Holt",
            "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
         },
         {  
            "id":5,
            "email":"charles.morris@reqres.in",
            "first_name":"Charles",
            "last_name":"Morris",
            "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
         }
      ]
   }

   const describedComponent = mount(<EmployeeList />)
   await describedComponent.setState({employees: employees.data})
   expect(describedComponent.find('li')).toHaveLength(5)
  });
});