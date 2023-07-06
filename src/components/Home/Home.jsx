import React from 'react'
import { Link } from 'react-router-dom'
import movie from '../../imgs/banner_bg01.jpg'
import '../Home/Home.css'
import HomeHeader from '../HomeHeader/HomeHeader'
import TrendingMovies from '../TrendingMovies/TrendingMovies'

export default function Home() {
  return (
    <div>
   <HomeHeader/>
   <TrendingMovies/>
</div>
)
}

  
