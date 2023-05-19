import { Component } from 'react';
import { data } from '../data/users';
import { Button } from './Button/Button';
import { UsersList } from './UsersList/UsersList';
import { AddUserForm } from './AddUserForm/AddUserForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    users: data,
    isListSchown: false,
    isFormShown: false,
  };

  showList = () => {
    this.setState({ isListSchown: true });
  };

  deleteUser = id => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => user.id !== id),
      };
    });
  };

  addUser = (data) => {
    const newUser = { id: nanoid(), ...data };
    this.setState((prevState) => {
      return { users: [...prevState.users, newUser] };
    });
  };

  openForm = () => {
    this.setState({ isFormShown: true });
  };

  closeForm = () => {
    this.setState({ isFormShown: false });
  };

  render() {
    const { users, isListSchown, isFormShown } = this.state;
    return (
      <div>
        {isListSchown ? (
          <UsersList users={users} onDelete={this.deleteUser} />
        ) : (
          <Button text="Show list of users" clickHendler={this.showList} />
        )}

        {isFormShown ? (
          <AddUserForm addedUser={this.addUser} onCloseForm={this.closeForm} />
        ) : (
          <Button text="Add user" clickHendler={this.openForm} />
        )}
      </div>
    );
  }
}
