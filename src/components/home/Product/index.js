import React from "react"
import p2_dashboard_img from "../../../data/assets/banner/dashboard.svg"
import { ProductMain } from "./styles"

const Product = () => {
  return (
    <ProductMain id="pricing">
      <h1>One solution to replace them all</h1>
      <img src={p2_dashboard_img} alt="ProductMain" className="dashboard_img" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
        molestie vivamus rhoncus, nulla. Morbi scelerisque pharetra, feugiat
        augue dolor ac quisque pulvinar bibendum.
      </p>
    </ProductMain>
  )
}
export default Product
