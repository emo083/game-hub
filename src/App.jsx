import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";


import Home from "./pages/Home";
import AllGames from "./pages/AllGames.jsx";
import GameDetails from "./pages/GameDEtails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgetPassword";
import MyProfile from "./pages/MyProfile";
import UpdateProfile from "./pages/UpdateProfile";
import NotFound from "./pages/NotFound";

import ExtraInfo from "./pages/ExtraInfo";


import ProtectedRoute from "./components/ProtectedRoute";
import PageWrapper from "./components/PageWrapper";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper title="Home">
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/games"
          element={
            <PageWrapper title="All Games">
              <AllGames />
            </PageWrapper>
          }
        />
        <Route
          path="/extra-info"
          element={
            <PageWrapper title="Extra Info">
              <ExtraInfo />
            </PageWrapper>
          }
        />
        <Route
          path="/game/:id"
          element={
            <ProtectedRoute>
              <PageWrapper title="Game Details">
                <GameDetails />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PageWrapper title="Login">
              <Login />
            </PageWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <PageWrapper title="Register">
              <Register />
            </PageWrapper>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PageWrapper title="Forgot Password">
              <ForgotPassword />
            </PageWrapper>
          }
        />
        <Route
          path="/my-profile"
          element={
            <ProtectedRoute>
              <PageWrapper title="My Profile">
                <MyProfile />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-profile"
          element={
            <ProtectedRoute>
              <PageWrapper title="Update Profile">
                <UpdateProfile />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="*"
          element={
            <PageWrapper title="404 Not Found">
              <NotFound />
            </PageWrapper>
          }
        />
      </Routes>
    </Layout>
  );
}
