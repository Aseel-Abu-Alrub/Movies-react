import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home.jsx'
import { ToastContainer } from 'react-toastify';
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import { MovieContextProvider } from './components/Context/MovieContext'
import Movies from './components/Movies/Movies';
import NotFound from './components/NotFound/NotFound.jsx'
import Contacts from './components/Contacts/Contacts';
import TvShow from './components/TvShow/TvShow';
import Popular from './components/Popular/Popular';
import MovieDetails from './components/MovieDetails/MovieDetails';
import MovieDetails2 from './components/MovieDetails/MovieDetails2';
import {GlobalProvider} from './components/WishContext/GlobalState'

import { SkeletonTheme } from 'react-loading-skeleton';
import TvDetails from './components/TvDetails/TvDetails';
import { Watchlist } from './components/Watchlist/Watchlist';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


export default function App() {

  let router=createBrowserRouter([
{path:'',element:<Layout/>,
children:[
{index:true,element:<Home/>},
{path:'home',element:<Home/>},
{path:'register',element:<Register/>},
{path:'login',element:<Login/>},
{path:'movie',element:<Movies/>},
{path:'list',element:<ProtectedRoute><Watchlist/></ProtectedRoute>},
{path:'popular',element:<Popular/>},
{path:'contact',element:<Contacts/>},
{path:'movie/:id',element:<MovieDetails/>},
{path:'movie2/:id',element:<MovieDetails2/>},
{path:'tv2/:id',element:<TvDetails/>},
{path:'tv',element:<TvShow/>},
{path:'*',element:<NotFound/>}



]


}



  ])


  return (
    <SkeletonTheme baseColor="#202020" highlightColor='#444'>
      <GlobalProvider>
    <MovieContextProvider>
       <RouterProvider router={router}></RouterProvider>
       <ToastContainer />
    </MovieContextProvider>
    </GlobalProvider>
    </SkeletonTheme>
   
  )
}

