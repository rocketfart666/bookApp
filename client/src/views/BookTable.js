import React, { useState, useEffect, Fragment } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios'

// Import Components
import AddBook from '../components/AddBook'

const BookTable = (props) => {
    const [bookDetails, setBookDetails] = useState([]);

    useEffect(() => {
        getBooksFromMongoDB()
    },[]);

    const getBooksFromMongoDB = async () => {
      const config = {
        headers:{
            "Content-Type": "application/json"
        }
      }
      axios.get('/api/books', config)
      .then(res => setBookDetails(res.data))
    }

    console.log(bookDetails)
  return (
    <Fragment>
      <AddBook />
      <Table size="sm">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Book Name</th>
            <th>Cover Type</th>
          </tr>
        </thead>
        <tbody>
          {bookDetails.map(({isbn, bookname, coverType}) => <tr>
              <td>{isbn}</td>
              <td>{bookname}</td>
              <td>{coverType}</td>
          </tr>)}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default BookTable;