import { Fragment, useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => (
      [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() }
      ]
    ));
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
};

export default App;
