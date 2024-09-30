
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApiTest from '../pages/dashboard/ApiTest';


// react lazy only supports deault export
const Login = lazy(() => import('../pages/authentication/Login'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const Index = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                < Routes>
                    {/* <Route path='/' element={<Login />} /> */}
                    {/* <Route path='/' element={<Dashboard />} /> */}
                    <Route path='/' element={<ApiTest />} />

                    

                </Routes>
            </Suspense>
        </Router>
    )
}

export default Index