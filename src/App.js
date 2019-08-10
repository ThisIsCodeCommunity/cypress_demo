import React from 'react';
import EmployeeList from './EmployeeList'
import { Container } from 'semantic-ui-react'


function App() {
  return (
    <>
      <Container>
        <section id="header">
          <h1>Employee list</h1>
        </section>
        <section id="main">
          <EmployeeList />
        </section>
      </Container>
    </>
  );
}

export default App;
