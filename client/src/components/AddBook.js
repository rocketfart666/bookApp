import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import axios from 'axios'

const AddBook = (props) => {
  const [modal, setModal] = useState(false);
  const [bookname, setBookname] = useState('')
  const [isbn, setIsbn] = useState('')
  const [coverType, setCoverType] = useState('')
  const [errorMessage, serErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const toggle = () => setModal(!modal);

  const submitBook = async () => {
    serErrorMessage('')
    if(bookname&&isbn&&coverType){
        const newBook = {
            bookname,
            isbn,
            coverType,
          }
        axios.post('/api/books', newBook)
        .then(res => {
            props.updateBookDetails(res.data)
            setBookname('')
            setIsbn('')
            setCoverType('')
            return setSuccessMessage('Book Added')
        })
        .catch(err => {
            return serErrorMessage(err.message)
        })
        
    } else {
        return serErrorMessage("Missing Field")
    }
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>Add Book</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            {errorMessage&&<Alert color="danger">
                {errorMessage}
            </Alert>}
            {successMessage&&<Alert color="success">
                {successMessage}
            </Alert>}
            <Form>
                <FormGroup>
                    <Label for="bookname">Book Name</Label>
                    <Input type="text" name="bookname" placeholder="Book Name" defaultValue={bookname} onChange={e => setBookname(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="bookname">ISBN</Label>
                    <Input type="number" name="isbn" placeholder="ISBN Number" defaultValue={isbn} onChange={e => setIsbn(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="coverType">Book Type</Label>
                    <Input type="select" name="coverType" placeholder="Cover Type" defaultValue={coverType} onChange={e => setCoverType(e.target.value)}>
                        <option></option>
                        <option>Hardcover</option>
                        <option>Paperback</option>
                    </Input>
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitBook}>Add Book</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddBook;