import React from 'react';
import Link from './Styles';

export function ButtonLink({ userId }) {
  return <Link to={{ pathname: `/${userId}` }}>MORE DETAILS</Link>;
}
