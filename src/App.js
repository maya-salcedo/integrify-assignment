import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Card } from './components/Card/Card';
import { UserProfile } from './components/UserProfile/UserProfile';

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Card} exact></Route>
      <Route path="/:user_id" component={UserProfile}></Route>
    </BrowserRouter>
  );
}
