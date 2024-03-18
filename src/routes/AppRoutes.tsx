import { FullScreenLoader } from '../modules/Common/FullScreenLoader';
import { HomePage } from '../modules/App/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

type AppRoutesType = {
};

export const AppRoutes: React.FC<AppRoutesType> = ({ }) => (
    <Routes>
        <Route path='/*' element={
            <Suspense fallback={<FullScreenLoader />}>
                <HomePage />
            </Suspense>
        } />
    </Routes>
)