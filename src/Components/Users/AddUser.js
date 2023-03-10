import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    setEnteredName('');
    setEnteredAge('');
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type='submit'>Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
