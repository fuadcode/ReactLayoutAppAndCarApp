import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from './layout/MainLayout';
import PageLayout from './Components/PageLayout';
import HomeContent from './pages/Home/';
import AboutContent from './pages/About/';
import SamplePostContent from './pages/SamplePost/';
import ContactContent from './pages/Contact/';
import LoginContent from './pages/Login/';
import SignupContent from './pages/Signup/';
import NotFound from './pages/NotFound';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <PageLayout backgroundImage="https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/home-bg.jpg">
                <HomeContent />
              </PageLayout>
            }
          />
          <Route
            path="about"
            element={
              <PageLayout backgroundImage="https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/about-bg.jpg">
                <AboutContent />
              </PageLayout>
            }
          />
          <Route
            path="samplepost"
            element={
              <PageLayout backgroundImage="https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/post-bg.jpg">
                <SamplePostContent />
              </PageLayout>
            }
          />
          <Route
            path="contact"
            element={
              <PageLayout backgroundImage="https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/contact-bg.jpg">
                <ContactContent />
              </PageLayout>
            }
          />
          <Route
            path="login"
            element={
              <PageLayout backgroundImage="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61fbe1d2-984b-45c7-b49a-9b9717d41abc/d7a56l5-3ee1faa3-6358-40bd-bb5a-9ac27112a73d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxZmJlMWQyLTk4NGItNDVjNy1iNDlhLTliOTcxN2Q0MWFiY1wvZDdhNTZsNS0zZWUxZmFhMy02MzU4LTQwYmQtYmI1YS05YWMyNzExMmE3M2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cOrLKmCNrGdC_0RKza4HoaAZe1VtbByywAvzzeVzgUs">
                <LoginContent />
              </PageLayout>
            }
          />
          <Route
            path="signup"
            element={
              <PageLayout backgroundImage="https://www.sagatraining.ca/wp-content/uploads/2018/10/background-images-for-login-form-8.jpg">
                <SignupContent />
              </PageLayout>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;
