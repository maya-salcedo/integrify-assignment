import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ButtonLink } from '../Button/Button';
import { UserProfile } from '../UserProfile/UserProfile';
import CardWrapper from './Styles';

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
    <>
      {users?.length > 0 &&
        users.map((user) => {
          return (
            <CardWrapper key={user.id}>
              <CardWrapper.Name>{user.name}</CardWrapper.Name>
              <CardWrapper.UserName>{user.username}</CardWrapper.UserName>
              <CardWrapper.Website>{user.website}</CardWrapper.Website>
              <ButtonLink userId={user.id} />
            </CardWrapper>
          );
        })}
    </>
  );
}
