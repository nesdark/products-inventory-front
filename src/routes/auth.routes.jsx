import { Routes, Route, Router } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignOn } from '../pages/SignOn';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/create" element={<SignOn />} />
    </Routes>
  );
}
