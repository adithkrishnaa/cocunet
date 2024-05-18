import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Component/About/About";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import ScrollTop from "./Component/ScrollTop/ScrollTop";
import CartPage from "./Pages/Cart/CartPage";
import AllProduct from "./Pages/AllProducts/AllProduct";
import Product from "./Pages/Product/Product";
import Service from "./Component/Service/Service";
import Signup from "./Pages/Registration/SignUp";
import Login from "./Pages/Registration/Login";
import UserDashboard from "./Pages/User/UserDashboard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddProductPage from "./Pages/Admin/AddProductPage";
import UpdateProductPage from "./Pages/Admin/UpdateProductPage";
import MyState from "./Context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./ProtectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./ProtectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./Pages/Category/CategoryPage";
import "../src/App.css";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/service" element={<Service />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<CategoryPage />} />
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRouteForUser>
                <UserDashboard />
              </ProtectedRouteForUser>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProductPage />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProductPage />
              </ProtectedRouteForAdmin>
            }
          />

          <Route
            path="/updateproduct/:id"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProductPage />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;
