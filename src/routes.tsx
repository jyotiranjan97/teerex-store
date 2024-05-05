import { createBrowserRouter } from 'react-router-dom';
import WelcomePage from './pages';
import ProductCartPage from './pages/cart';
import ProductsPage from './pages/products';
import ProductItemPage from './pages/products/[id]';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />
  },
  {
    path: '/products',
    element: <ProductsPage />
  },
  {
    path: '/products/:id',
    element: <ProductItemPage />
  },
  {
    path: '/cart',
    element: <ProductCartPage />
  }
]);

export default router;
