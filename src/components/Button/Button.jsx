import React from 'react';
import { Link } from 'react-router-dom';

export function ButtonLink({ userId }) {
  return <Link to={{ pathname: `/${userId}` }}>MORE DETAILS</Link>;
}
