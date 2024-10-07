
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApiTest from '../pages/dashboard/ApiTest';
import CachingTest from '../pages/dashboard/CachingTest';
import Register from '../pages/admin/authentication/Register';
import PdfGenerator from '../components/testpdf';
import PdfHeader from '../pdf/PdfHeader';
import TestTwo from '../pdf/TestTwo';


// react lazy only supports deault export
const Login = lazy(() => import('../pages/user/authentication/Login'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const Permissions = lazy(() => import('../pages/admin/authentication/Permissions'));
const Doctors = lazy(() => import('../pages/doctor/DoctorsList'));


const Index = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                < Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/admin/register' element={<Register />} />
                    <Route path='/admin/register/permissions' element={<Permissions />} />
                    <Route path='/doctors' element={<Doctors />} />
                    {/* <Route path='/pdf' element={<PdfGenerator />} /> */}
                    <Route path='/pdf' element={<TestTwo />} />




                    

                    {/* <Route path='/hello' element={<CachingTest />} /> */}
                    {/* <Route path='/' element={<ApiTest />} /> */}



                </Routes>
            </Suspense>
        </Router>
    )
}

export default Index