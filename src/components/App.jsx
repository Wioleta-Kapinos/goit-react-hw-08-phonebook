import React, {  useEffect, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "layout/Layout";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const PhonebookPage = lazy (() => import("../pages/PhonebookPage/PhonebookPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));

export const App = () =>{
  
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

    return isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/phonebook" component={<RegisterPage />} />
              }
          />
        <Route 
            path="/login"
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<LoginPage />} />
            }
        />
        <Route 
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
            }
        />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
}

export default App;