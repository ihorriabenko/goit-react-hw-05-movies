import {Routes, Route} from 'react-router-dom';
import Header from 'modules/Header';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage';
import SinglePostPage from 'pages/MovieDetailsPage';
import CastPage from 'pages/CastPage';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies' element={<MoviesPage />}/>
        <Route path='/movies/:id' element={<SinglePostPage/>}>
        <Route path='cast' element={<CastPage />}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
};
