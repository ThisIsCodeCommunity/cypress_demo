import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import EmployeeList from '../EmployeeList'

describe('<EmployeeList />', () => {
  it('should fetch data from external api using Axios', () => {
    const axiosSpy = jest.spyOn(axios, 'get')
    shallow(<EmployeeList />)
    expect(axiosSpy).toBeCalled()
  });
});