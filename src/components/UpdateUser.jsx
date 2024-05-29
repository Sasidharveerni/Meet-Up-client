import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function UpdateUser({fetchUsers, id}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [profile, setProfile] = useState('');

  const updateUsers = async (e) => {
    try {
      e.preventDefault();
      await axios.patch(`https://meet-up-server.onrender.com/users/${id}`, {
        name,
        email,
        age,
        profile
      })
      fetchUsers();
    } catch (error) {
      alert('There is an error in updating users !');
      console.log(error)
    }
    handleClose();
  }

  return (
    <>
      <Button variant='dark' style={{ border: 'none'}} onClick={handleShow}>
       Update
      </Button>
    {id && 
    
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update the user</Modal.Title>
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
          <Button variant="dark" onClick={updateUsers}>
            Update User
          </Button>
        </Modal.Footer>
      </Modal>

      </>
}
    </>
  );
}

export default UpdateUser;