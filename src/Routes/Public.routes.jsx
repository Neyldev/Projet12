import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, Error404 } from '@/Pages/Public/Index';

import Layout from '@/Layouts/Layout';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {/* <Route path="" element={<Navigate to="/Home" />} /> */}
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate to="/Home" />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;