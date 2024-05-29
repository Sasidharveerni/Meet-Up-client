
import Card from 'react-bootstrap/Card';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';

function UserComponent({fetchUsers, users}) {
  
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', margin: '2rem',}}>
    {users.map((user) => (
    <Card key={user._id} style={{ width: '18rem', marginBottom: '2rem'}}>
      <Card.Img variant="top" src={user.profile} style={{borderRadius: '50%', width: '5rem', height: '5rem' ,textAlign: 'center'}}/>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
         {user.age}, {user.email}
        </Card.Text>
        <DeleteUser fetchUsers={fetchUsers} id={user._id} />
        <div style={{float: 'right'}}>
        <UpdateUser fetchUsers={fetchUsers} id={user._id} />
        </div>
      </Card.Body>
    </Card>
    ))}
    </div>
  );
}

export default UserComponent;