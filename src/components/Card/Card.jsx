import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ButtonLink } from '../Button/Button';
import CardWrapper from './Styles';
import { LoadingContainer } from '../Loading/Loading';
import { ErrorContainer } from '../Error/Error';

export function Card() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(data);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.error(`Error at Card: ${err}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CardWrapper>
      {isError && <ErrorContainer />}
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <>
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
        </>
      )}
    </CardWrapper>
  );
}
