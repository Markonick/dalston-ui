import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SidePanel } from "./components/SidePanel";
import { CartButton } from './pages/cart/CartButton';
import AppRoutes from "./routes";
import './App.css';

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
              <AppRoutes />
            </main>
          </div>
        </div>
      <Footer/>
      </Router>
    </RecoilRoot>
  );
}

export default App;
