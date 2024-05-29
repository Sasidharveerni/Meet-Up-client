import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddUser({fetchUsers}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [profile, setProfile] = useState('');

  const createUsers = async (e) => {
    try {
      e.preventDefault();
      await axios.post('https://meet-up-server.onrender.com/users', {
        name,
        email,
        age,
        profile
      })
      fetchUsers();
      setName('');
      setAge(0);
      setProfile('');
      setEmail('')
    } catch (error) {
      alert('There is an error in creating users !');
      console.log(error)
    }
    handleClose();
  }

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Add user details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add the user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                autoComplete='false'
                value={name}
                autoFocus
                onInput={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Enter Email</Form.Label>
              <Form.Control type="email"
                placeholder="yourname@example.com"
                autoComplete='false'
                value={email}
                autoFocus 
                onInput={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Enter age</Form.Label>
              <Form.Control type="number"
                placeholder="Enter your age"
                autoComplete='false'
                value={age}
                autoFocus 
                onInput={(e) => setAge(e.target.value)}
                />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Enter your profile image link</Form.Label>
              <Form.Control type="text"
                placeholder="Enter your profile image link.."
                autoComplete='false'
                value={profile}
                autoFocus 
                onInput={(e) => setProfile(e.target.value)}
                />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={createUsers}>
            Create User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddUser;