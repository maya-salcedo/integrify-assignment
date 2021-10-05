import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function UserProfile() {
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
              <h1>Name: {user.name} </h1>
              <p>
                Username: <br />
                Email: <br />
                Phone: <br />
                Company: <br />
                Website: <br />
                Address: <br />
                Street: <br />
                Suite: <br />
                City: <br />
                Zipcode: <br />
              </p>
            </div>
          );
        })}
    </div>
  );
}
