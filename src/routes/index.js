
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// react lazy only supports deault export
const Login = lazy(() => import('../pages/authentication/Login'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const Index = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                < Routes>
                    {/* <Route path='/' element={<Login />} /> */}
                    <Route path='/' element={<Dashboard />} />

                </Routes>
            </Suspense>
        </Router>
    )
}

export default Index