import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '@/Pages/Public/Index';

import Layout from '@/Layouts/Layout';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/Projet12" element={<Home />} />
                <Route path="*" element={<Navigate to="/Projet12" />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;