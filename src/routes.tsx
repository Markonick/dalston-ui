// AppRoutes.tsx
import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { About } from "./pages/About";
import { Info } from './pages/Info';
import { Products } from './pages/product/Products';
import { Product } from './pages/product/Product';
import { Cart } from './pages/cart/Cart';
import { Checkout } from './pages/checkout/Checkout';

// ======================= ROUTES CONSTANTS ================================

export const buildRoute = (route: string): string => `${route}`;

const PRODUCT_ROUTES = {
  ALL_PRODUCT_LIST: buildRoute('/products'),
  WOMEN_PRODUCT_LIST: buildRoute('/products?cat=women'),
  MEN_PRODUCT_LIST: buildRoute('/products?cat=men'),
  SHOES_PRODUCT_LIST: buildRoute('/products?cat=shoes'),
  BAGS_PRODUCT_LIST: buildRoute('/products?cat=bags'),
  ACCESSORIES_PRODUCT_LIST: buildRoute('/products?cat=accessories'),
  PRODUCT_DETAIL: buildRoute('/products/:id'),
};

const CART_ROUTES = {
  CART: buildRoute('/carts/:id'),
  CHECKOUT: buildRoute('/carts/:id/checkout'),
};

export const ROUTES_CONFIG = {
  ROOT: '/',
  ABOUT: '/about',
  ...PRODUCT_ROUTES,
  ...CART_ROUTES,
  INSTAGRAM: 'https://www.instagram.com/dalston.athens/?hl=en',
  FACEBOOK: 'https://www.facebook.com/dalstonathens-468488780264843/',
  INFO: '/info',
};

// =========================================================================

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback='loading'>
      <Switch>
        <Route path={ROUTES_CONFIG.ROOT} exact component={Products}/>
        <Route path={ROUTES_CONFIG.ALL_PRODUCT_LIST} exact component={Products}/>
        <Route path={ROUTES_CONFIG.WOMEN_PRODUCT_LIST} exact component={Products}/>
        <Route path={ROUTES_CONFIG.MEN_PRODUCT_LIST} exact component={Products}/>
        <Route path={ROUTES_CONFIG.SHOES_PRODUCT_LIST} exact component={Products}/>
        <Route path={ROUTES_CONFIG.BAGS_PRODUCT_LIST} exact component={Products}/>
        <Route path={ROUTES_CONFIG.ACCESSORIES_PRODUCT_LIST} exact component={Products}/>
        <Route path={ROUTES_CONFIG.PRODUCT_DETAIL} exact component={Product}/>
        <Route path={ROUTES_CONFIG.ABOUT} exact component={About}/>
        <Route path={ROUTES_CONFIG.CART} exact component={Cart}/>
        <Route path={ROUTES_CONFIG.CHECKOUT} exact component={Checkout}/>
        <Route path={ROUTES_CONFIG.INFO} exact component={Info}/>
      </Switch>
    </Suspense>
  );
};

export default withRouter(AppRoutes);