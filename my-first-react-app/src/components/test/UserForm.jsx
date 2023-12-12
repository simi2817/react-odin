import { useState } from "react";


const UserForm = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({
        name,
        address,
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
  
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
  
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  const UserManagement = ({ users, onAdd, onDelete, onEdit }) => {
    const [formOpen, setFormOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

      
    const addUser = (data) => {
        onAdd(data);
        setFormOpen(false);
      };
    
      const editUser = (data) => {
          console.log(data);
        onEdit(selectedUser, data);
        setSelectedUser(null);
        setFormOpen(false);
      };
  
    const Form = ({ selectedUser }) => {
        console.log(selectedUser);
      if (formOpen) {
        if (selectedUser) return <UserForm onSubmit={editUser} user={users[selectedUser]} />;
        else return <UserForm onSubmit={addUser} user={users[selectedUser]} />;
      }
      return null;
    };
  
    return (
      <>
        <button onClick={() => setFormOpen(true)}>Add user</button>
        <table>
          <thead>
            <tr><td>Name</td></tr>
            <tr><td>Address</td></tr>
            <tr><td>Action</td></tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedUser(index);
                      setFormOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Form selectedUser={selectedUser}/>
      </>
    );
  };
  
  export default UserManagement;