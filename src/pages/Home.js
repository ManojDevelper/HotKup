import React from "react"
import Banner from "../components/home/Banner"
import Product from "../components/home/Product"
import Cards from "../components/home/Cards"
import Review from "../components/home/Review"
import Footer from "../components/home/Footer"
import Navabar from "../components/Navbar"

const Home = () => {
  return (
    <div style={{ width: `100%;`, overflow: `hidden` }}>
      <Navabar />
      <Banner />
      <Product />
      <Cards />
      <Review />
      <Footer />
    </div>
  )
}
export default Home
