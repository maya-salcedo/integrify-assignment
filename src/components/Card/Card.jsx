import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ButtonLink } from '../Button/Button';
import { UserProfile } from '../UserProfile/UserProfile';

export function Card() {
  const [users, setUsers] = useState();

  const getData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {users?.length > 0 &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.username}</p>
              <p>{user.website}</p>
              <ButtonLink to="/1" />
            </div>
          );
        })}
      <UserProfile />
    </div>
  );
}
