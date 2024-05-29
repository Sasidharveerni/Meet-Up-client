import axios from 'axios';
import Button from 'react-bootstrap/Button';


function DeleteUser({fetchUsers, id}) {


  const deleteUsers = async (e) => {
    try {
      e.preventDefault();
      await axios.delete(`https://meet-up-server.onrender.com/users/${id}`)
      fetchUsers();
    } catch (error) {
      alert('There is an error in deleting users !');
      console.log(error)
    }
  }

  return (
    <>
      <Button variant='dark' style={{ border: 'none'}} onClick={deleteUsers}>
       Delete User
      </Button>
    
    </>
  );
}

export default DeleteUser;