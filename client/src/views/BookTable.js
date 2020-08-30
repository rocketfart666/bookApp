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
      axios.get('/api/books')
      .then(res => setBookDetails(res.data))
    }

    const updateBookDetails = newBook => {
      setBookDetails([...bookDetails, newBook])
    }

  return (
    <Fragment>
      <AddBook updateBookDetails={updateBookDetails}/>
      <br />
      <Table size="sm">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Book Name</th>
            <th>Cover Type</th>
          </tr>
        </thead>
        <tbody>
          {bookDetails.map(({isbn, bookname, coverType, _id}) => <tr key={_id}>
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