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
    <CardWrapper>
      {users?.length > 0 &&
        users.map((user) => {
          return (
            <CardWrapper.Card key={user.id}>
              <CardWrapper.Avatar
                src={`https://avatars.dicebear.com/api/initials/${user.name}.svg`}
              />
              <CardWrapper.Name>{user.name}</CardWrapper.Name>
              <CardWrapper.UserName>@{user.username}</CardWrapper.UserName>
              <CardWrapper.Website href={`https://${user.website}`}>
                https://{user.website}
              </CardWrapper.Website>
              <ButtonLink userId={user.id} />
            </CardWrapper.Card>
          );
        })}
    </CardWrapper>
  );
}
