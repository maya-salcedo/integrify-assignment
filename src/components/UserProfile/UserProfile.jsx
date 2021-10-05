import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function UserProfile() {
  const { user_id } = useParams();
  const [user, setUser] = useState({});

  const getData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );

    setUser(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>
        Username: {user?.username}
        <br />
        Email: {user?.email} <br />
        Phone: {user?.phone} <br />
        Company: {user?.company?.name} <br />
        Website: {user?.website} <br />
        Address: <br />
        Street: {user?.address?.street} <br />
        Suite: {user?.address?.suite}
        <br />
        City: {user?.address?.city} <br />
        Zipcode: {user?.address?.zipcode} <br />
      </p>
    </div>
  );
}
