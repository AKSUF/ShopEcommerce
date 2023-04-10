import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer '
import CategoryPage from './CategoryPage'
export default function Home() {
    return (
        <div className=' font-bold  iems-center justify-center' >
 <Announce></Announce>
 <Navbar></Navbar>
<Slider></Slider>
<CategoryPage></CategoryPage>
<Products></Products>
<NewsLetter></NewsLetter>
<Footer></Footer>

        </div>
    )
}
