import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home-page/HomePage';
import { RestaurantPage } from './pages/restaurant-page/RestaurantPage';
import { MyHeader } from './components/global cmps/header-cmp/MyHeader';
import { MyFooter } from './components/global cmps/footer-cmp/MyFooter';

export const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <MyHeader />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/restaurants" element={<RestaurantPage />} />
                </Routes>
                <MyFooter />
            </BrowserRouter>
        </div>
    );
};
