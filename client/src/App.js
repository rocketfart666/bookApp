import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Import Components
import NavigationBar from './components/NavigationBar'
import BookTable from './views/BookTable'
import { Container } from 'reactstrap';

function App() {
  return (
      <Container>
        {/* <NavigationBar /> */}
        <br />
        <BookTable />
      </Container>
  );
}

export default App;
