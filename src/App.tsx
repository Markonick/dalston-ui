import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SidePanel } from "./components/SidePanel";
import { CartButton } from './pages/cart/CartButton';
import AppRoutes from "./routes";
import './App.css';
import {
  Elements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

function App() {
  return (
    <RecoilRoot>
      <Router>
        <CartButton/> 
        <Header/>
        <div style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundColor:'white',
          marginTop: 150,
        }}>
          <div className="row">
            <SidePanel />

            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-10 px-md-4"
            >
              <Elements stripe={stripePromise}>
                <AppRoutes />
              </Elements>
            </main>
          </div>
        </div>
      <Footer/>
      </Router>
    </RecoilRoot>
  );
}

export default App;
