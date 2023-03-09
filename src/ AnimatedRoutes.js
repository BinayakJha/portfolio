import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from './MainPage';
import ContactMe from './ContactMe';
import AboutPage from './AboutPage';
import PortfolioPage from './PortfolioPage';
import { AnimatePresence } from "framer-motion";
import PortfolioDetails from "./PortfolioDetails";
import AwardsDetails from "./AwardsDetails";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactMe />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/portfolio_details/:id" element={<PortfolioDetails/>} />
                <Route path="/awards" element={<Award/>} />
                <Route path="/awards_details/:id" element={<AwardsDetails/>} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;