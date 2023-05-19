export const UsersList = ({ users, onDelete }) => (
  <ul>
    {users.map(({ name, email, id }) => (
      <li key={id}>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button type="button" onClick={()=>onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
