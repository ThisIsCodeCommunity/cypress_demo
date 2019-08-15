/// <reference types="cypress" />
import React from 'react'
import EmployeeList from '../../../src/EmployeeList'

import axios from 'axios'

describe('<EmployeeList />', () => {

  beforeEach(() => {
    cy.server()
    cy.route({ url: 'https://reqres.in/api/users?per_page=5', method: 'GET', response: 'fixture:employeesMock.json' })
  });

  it('should fetch data from external api using Axios', () => {
    cy.spy(axios, 'get').as('axios')
    cy.mount(<EmployeeList />)
    cy.get('@axios').should('have.been.calledOnce')
  });

  it('renders 5 employees data', () => {
    const employees = [
      {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "Thomas",
        "last_name": "Bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
      },
      {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Adi",
        "last_name": "Weaver",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
      },
      {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
      },
      {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      }
    ]

    cy.mount(<EmployeeList />)
    cy.get(<EmployeeList />)
      .its('state')
      .should('deep.equal', { employees: employees })
    cy.get('div[role="listitem"]')
      .should('have.length', 5)
      .first()
      .should('contain', 'Thomas Bluth')
      .next()
      .should('contain', 'Adi Weaver')
      .next()
      .should('contain', 'Emma Wong')
      .next()
      .should('contain', 'Eve Holt')
      .next()
      .should('contain', 'Charles Morris')
  });
});
