// src/components/Routes.tsx
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/AboutUs';
import Contact from '../Pages/Contact';
import Error from '../Pages/Error';
import Services from './Services';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/*' element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
