// /*eslint-disable */

// import React, {  Suspense } from 'react';
// import { ClipLoader } from 'react-spinners'
// import {BrowserRouter, BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import { ProductProvider } from './ProductContext';

// const Layout = React.lazy(() => import('./pages/Layout'));
// const Home = React.lazy(() => import('./pages/Home'));
// const Contact = React.lazy(() => import('./pages/Contact'));
// const About = React.lazy(() => import('./pages/About'));
// const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
// const CheckOut = React.lazy(() => import('./pages/CheckOut'));
// const AllProducts = React.lazy(() => import('./pages/AllProducts'));
// const NotFound = React.lazy(() => import('./pages/NotFound'));
// // import './App.css';


// function App() {
//   return (
//         <BrowserRouter>
//         <Suspense fallback={
//         <div className="loader-container">
//           <ClipLoader color={"#123abc"} loading={true} size={50} />
//         </div>
//         }>
//             <Routes>
//               <Route path="/" element={<Layout/>} >
//                 <Route index element={<Home/>} />
//                 <Route path= "Contact" element={<Contact/>} />
//                 <Route path= "About" element={<About/>} />
//                 <Route path=":name" element={<ProductDetail/>} />
//                 <Route path="CheckOut" element={<CheckOut/>} />
//                 <Route path="AllProducts" element={<AllProducts/>} />
//                 <Route path= "/*" element={<NotFound/>} />
//               </Route>
//             </Routes>
//         </Suspense>
//         </BrowserRouter>
//   )
// }

// export default App

import { Suspense } from 'react';
import { ClipLoader } from 'react-spinners';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from './ProductContext'; // تأكد من استيراد ProductProvider

// const Layout = React.lazy(() => import('./pages/Layout'));
// const Home = React.lazy(() => import('./pages/Home'));
// const Contact = React.lazy(() => import('./pages/Contact'));
// const About = React.lazy(() => import('./pages/About'));
// const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
// const CheckOut = React.lazy(() => import('./pages/CheckOut'));
// const AllProducts = React.lazy(() => import('./pages/AllProducts'));
// const NotFound = React.lazy(() => import('./pages/NotFound'));

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import ProductDetail from "./pages/ProductDetail"
import CheckOut from "./pages/CheckOut"
import AllProducts from "./pages/AllProducts"
import AdminDashboard from "./pages/AdminDashboard"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <ProductProvider> {/* إحاطة جميع المسارات بـ ProductProvider */}
      <Router>
        <Suspense fallback={
          <div className="loader-container">
            <ClipLoader color={"#123abc"} loading={true} size={50} />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="About" element={<About />} />
              <Route path=":name" element={<ProductDetail />} />
              <Route path="CheckOut" element={<CheckOut />} />
              <Route path="AllProducts" element={<AllProducts />} />
              <Route path="AdminDashboard" element={<AdminDashboard />} />
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ProductProvider>
  );
}

export default App;

