import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/User/Home';
import { DishView } from '../pages/User/DishView';

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<DishView />} />
    </Routes>
  );
}
