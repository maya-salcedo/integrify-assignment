import React from 'react';
import { Link } from 'react-router-dom';

export function ButtonLink(...restProps) {
  return <Link {...restProps}>MORE DETAILS</Link>;
}
