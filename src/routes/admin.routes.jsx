import { Routes, Route } from 'react-router-dom';

import { HomeAdmin } from '../pages/Admin/HomeAdmin';
import { DishViewAdmin } from '../pages/Admin/DishViewAdmin';
import { CreateDish } from '../pages/Admin/CreateDish';
import { EditDish } from '../pages/Admin/EditDish';
import { ShoppingCart } from '../pages/Cart';
import { Changelog } from '../pages/Changelog';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/dish/:id" element={<DishViewAdmin />} />
      <Route path="/dish/create" element={<CreateDish />} />
      <Route path="/dish/update/:id" element={<EditDish />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/changelog" element={<Changelog />} />
    </Routes>
  );
}
