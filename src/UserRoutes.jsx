import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const CastPage = lazy(() => import('./pages/CastPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading page</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
