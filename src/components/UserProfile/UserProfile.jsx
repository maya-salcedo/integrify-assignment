import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserWrapper from './Styles';
import CardWrapper from '../Card/Styles';
import Link from '../Button/Styles';
import { ErrorContainer } from '../Error/Error';
import { LoadingContainer } from '../Loading/Loading';

export function UserProfile() {
  const { user_id } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${user_id}`
      );
      setUser(data);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.error(`Error at UserProfile: ${err}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <UserWrapper>
      {isError && <ErrorContainer />}
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <CardWrapper.Box>
          <CardWrapper.Title>Name: {user.name}</CardWrapper.Title>
          <CardWrapper.Text>
            Username: {user?.username}
            <br />
            Email: {user?.email} <br />
            Phone: {user?.phone}
          </CardWrapper.Text>
          <CardWrapper.Text>
            Company: {user?.company?.name} <br />
            Website: {user?.website} <br />
          </CardWrapper.Text>
          <CardWrapper.Text>
            Address: <br />
            Street: {user?.address?.street} <br />
            Suite: {user?.address?.suite}
            <br />
            City: {user?.address?.city} <br />
            Zipcode: {user?.address?.zipcode} <br />
          </CardWrapper.Text>
        </CardWrapper.Box>
      )}
      <Link to="/">Go back</Link>
    </UserWrapper>
  );
}
