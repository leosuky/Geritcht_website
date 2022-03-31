import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer } from './container';
import { Navbar } from './components';
import './App.css';
import {AboutPage, BlogPage, ContactUsPage, HomePage, ReservationPage, MenuPage } from './pages';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/menu' element={<MenuPage />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/contact' element={<ContactUsPage />} />
      <Route path='/reservation' element={<ReservationPage />} />
    </Routes>
    <Footer />
    {/*
    <SpecialMenu />
     */}
  </div>
);

export default App;
